import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

App = () => {
  const [coordinate, setCoordinate] = useState(null);

  const selectPlace = (event) => {
    setCoordinate(event.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          longitude: -99.2001685947205,
          latitude: 18.852438123600546,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        }}
        mapType='standard'
        onLongPress={selectPlace}
      >
        {coordinate && (
          <Marker title='Marcador hecho por el usuario' coordinate={coordinate} />
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})


export default App;
