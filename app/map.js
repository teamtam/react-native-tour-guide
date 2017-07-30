import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { Places } from "./places";

const { width, height } = Dimensions.get('window');

export default class Map extends Component {

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -37.813628,
          longitude: 144.963058,
          latitudeDelta: 0.07,
          longitudeDelta: 0.035,
        }}
      >
        {Places.map(place => (
          <MapView.Marker
            key={place.image}
            coordinate={{latitude: place.lat, longitude: place.long}}
            title={place.name}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    marginTop: 20,
    width: width,
    height: height,
  },
});
