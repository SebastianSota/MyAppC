import { NavigationContainer, useRoute } from '@react-navigation/native';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

Profile = () => {

    const route = useRoute();

    const { item } = route.params ? route.params : "No hay usuarios";

    const [userLogged, setUserLogged] = useState();
    


    useEffect(() => {
        getUser = async () => {
            const get = await AsyncStorage.getItem("userLogged");
            setUserLogged(JSON.parse(get));
        }
        getUser();
    }, []);

    return (
        <View style={styles.container}>
            <Text>{item ? item.username : "No hay usuarios"}</Text>
            <Text>{userLogged ? userLogged.username : "No se inició sesión"}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Profile;