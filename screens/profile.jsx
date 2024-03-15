import { Button, Image, Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

Profile = () => {
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/e/e0/Hayley_Williams_at_Royal_Albert_Hall_-_19th_June_2017_-_09_%28cropped%29.jpg");
    const navigation = useNavigation();
    const [userName, setUsername] = useState();
    const [edad, setEdad] = useState();

    const navegarAProfile2 = () => {
        const user = { username: userName, edad: edad, image: image };
        navigation.navigate("Profile2", { user });
    }

    const selectImage = async () => {
        let result;
        Alert.alert('¿Tomar foto o abrir imagen?', undefined, [{
            text: 'Foto', onPress: async () => {
                result = await ImagePicker.launchCameraAsync({
                    quality: 1,
                    allowsEditing: true,
                    aspect: [3, 4],
                    mediaTypes: ImagePicker.MediaTypeOptions.All,

                });
                console.log(result);

                if (!result.canceled) {
                    setImage(result.assets[0].uri)
                }
            }
        }, {
            text: 'Imagen', onPress: async () => {
                result = await ImagePicker.launchImageLibraryAsync({
                    quality: 1,
                    allowsEditing: true,
                    aspect: [3, 4],
                    mediaTypes: ImagePicker.MediaTypeOptions.All
                });
                console.log(result);

                if (!result.canceled) {
                    setImage(result.assets[0].uri)
                }
            }
        }])
    }

    return (
        <View style={styles.container}>
            <Button
                title={'Seleccionar imagen'}
                onPress={selectImage} />
            <Input placeholder='Hayley'
                label="Usuario:"
                value={userName} onChangeText={setUsername} />
            <Input placeholder='32'
                label="Edad:"
                value={edad} onChangeText={setEdad} />
            <Button title={'Ir a Profile2'} onPress={navegarAProfile2} />
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