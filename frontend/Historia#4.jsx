import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Mapa() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 6.28027755,
            longitude: -75.5828041258888,
          }}
        >
        </MapView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
  });
