import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '@rneui/themed';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Login from './login';
import Pokedex from './pokedex';

OtherLogin = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        getUserLogged();
    }, []);

    getUserLogged = async () => {
        const get = await AsyncStorage.getItem("userLogged");
        setUser(JSON.parse(get));
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            {
                user != null ? (
                    <Pokedex />
                ) : (<Login />)
            }
            <Button title={'Limpiar item'} color={'secondary'}
                onPress={async () => {
                    AsyncStorage.removeItem("userLogged");
                    console.log(await AsyncStorage.getItem("userLogged"));
                    setUser(null);
                }} />
        </View>
    )
}

export default OtherLogin;