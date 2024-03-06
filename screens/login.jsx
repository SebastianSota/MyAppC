import { useNavigation } from '@react-navigation/native';
import { Card, Image, Button, Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { Firebase } from '../config/firebase';
import { Backend } from '../config/backendconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

    const navigation = useNavigation();

    let [userName, setUserName] = useState('');
    let [pass, setUserPassword] = useState('');

    const { appFirebase } = Firebase();
    const { url } = Backend();

    let intentos = 0;

    const checkUser = async () => {
        const payload = { username: userName, password: pass };
        const response = await fetch(url + "/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (response.ok && response.status === 200) {
            const data = await response.json();
            console.log(data);
            AsyncStorage.setItem("userLogged", JSON.stringify(data));
            // AsyncStorage.removeItem("userLogged");
            Alert.alert(`Bienvenido ${data.username}`, undefined, [
                { text: "Gracias", onPress: ()=> navigation.replace("BottomTab") }
            ]);
        }
    };

    const validateUser = async () => {
        if (intentos > 3) {
            Alert.alert('Demasiados intentos',
                `Usuario bloqueado por 30 minutos`,
                [
                    {
                        text: 'Ok'
                    }
                ]);
        } else {
            const response = await checkUser();
            const userCredential = await response.json();
            console.log(userCredential);
            if (userCredential.ok) {
                navigation.replace('BottomTab');
            } else {
                Alert.alert('Usuario incorrecto',
                    `Tienes ${3 - intentos} intentos restantes `,
                    [
                        {
                            text: 'Ok', onPress: () => {
                                intentos++;
                            }
                        }
                    ]);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Iniciar sesión</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png'
                    }} />
                <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    style={styles.texto}
                    placeholder='Usuario' />
                <TextInput
                    value={pass}
                    onChangeText={setUserPassword}
                    style={styles.texto}
                    placeholder='Contraseña' />
                <Button
                    title={'Iniciar sesión'}
                    color={'#009475'}
                    onPress={checkUser} />

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    circulo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20,
        resizeMode: 'contain'
    },
    texto: {
        fontSize: 15,
        margin: 20
    }
})

export default Login;