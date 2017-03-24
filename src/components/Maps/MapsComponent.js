import React from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

const MapsComponent = () => (
  <MapView
    style={styles.mapContainer}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
  />
 );

export default MapsComponent;
