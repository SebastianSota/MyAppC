import { useNavigation } from '@react-navigation/native';
import { color, fonts } from '@rneui/base';
import { Button, Card, Image, Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, Alert, TextInput, ScrollView, SectionList, Modal } from 'react-native';

const Pokedex = () => {
  const navigation = useNavigation();

  const irASplash = () => {
    navigation.replace('Splash');
  }

  const [name, setName] = useState('ditto');
  const [image, setImage] = useState('https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_570xN.3584257734_bfy9.jpg')
  const [pokemons, setPokemons] = useState([]);
  const [modal, setModalVisible] = useState(false);
  const [selecPokemon, setSelectedPokemon] = useState({});

  const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setImage(data.sprites.front_default);
        setName(data.name);
        setPokemons(prevPokemon => [...prevPokemon, data]);
        pokemons.forEach((pokemon) => {
          if (pokemon.id === data.id) {
            Alert.alert('Repetidos', 'Ya habías encontrado este pokemon antes',
              [{ text: 'Vaya' }])
          }
        })
      } else {
        Alert.alert('¡No encontramos a tu Pokémon!',
          `El pokémon con el nombre: ${name} aún no está registrado`,
          [
            { text: 'OK', onPress: () => setName('') }
          ]);
      }
    } catch (error) {

    }
  }

  const abrirModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setModalVisible(true);
  }


  return (
    <View style={styles.container}>
      <Card containerStyle={{
        backgroundColor: 'white',
        borderRadius: 20
      }}>
        <Card.Title style={{
          fontWeight: 'bold',
          color: 'black'
        }}>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</Card.Title>
        <Card.Divider />
        <View style={styles.center}>
          <Image style={styles.imagen}
            source={{ uri: image }} />
        </View>
        <Card.Divider />
        <View style={styles.center}>
          <TextInput
            onChangeText={setName}
            placeholder='Introduce el nombre de un Pokémon'
            style={{
              fontSize: 15,
              marginBottom: 20,
              width: 200,
              color: 'black',
            }} />
          <Button title={'Buscar Pokémon'}
            color={'black'} style={{ borderRadius: 20 }} onPress={getPokemon} />
        </View>
      </Card>

      <Button
        title={'Ir a Splash'}
        style={{ width: 200 }}
        color={'secondary'} onPress={irASplash} />

      {/* <SectionList
        sections={[{
          title: 'Lista de Pokémons',
          data: pokemons
        }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Card containerStyle={{
            backgroundColor: 'white',
            borderRadius: 20
          }}>
            <Card.Title style={{
              fontWeight: 'bold',
              color: 'black'
            }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</Card.Title>
            <Card.Divider />
            <View style={styles.center}>
              <Image style={styles.imagen}
                source={{ uri: item.sprites.front_shiny }} />
            </View>
          </Card>
        )}
      /> */}
      <ScrollView>
        {
          pokemons.map((item, index) => {
            return (
              <Card
                key={item.name + index}
                containerStyle={{
                  backgroundColor: 'white',
                  borderRadius: 20
                }}>
                <Card.Title style={{
                  fontWeight: 'bold',
                  color: 'black'
                }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}</Card.Title>
                <Card.Divider />
                <View style={styles.center}>
                  <Image style={styles.imagen}
                    source={{ uri: item.sprites.front_shiny }}
                    onLongPress={() => abrirModal(item)}
                    onPressOut={() => setModalVisible(false)} />
                </View>
              </Card>
            );
          })
        }
      </ScrollView>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {selecPokemon?.name?.charAt(0).toUpperCase() + selecPokemon?.name?.slice(1).toLowerCase()}
          </Text>
          <Image style={styles.imagen}
            source={{ uri: selecPokemon.sprites?.other?.home?.front_default }} />
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  imagen: {
    height: 150,
    width: 150,
    marginBottom: 20,
    borderRadius: 20
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgb(161 161 161)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});





export default Pokedex;