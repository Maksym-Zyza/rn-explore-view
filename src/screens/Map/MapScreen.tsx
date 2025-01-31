import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapScreenProps } from "../../types/navigation";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useAppContext } from "../../hooks/useAppContext";

const MapScreen = () => {
  const { setTabBarShow } = useAppContext();
  const route = useRoute<MapScreenProps>();
  const location = route.params;

  useFocusEffect(
    useCallback(() => {
      setTabBarShow(false);

      return () => setTabBarShow(true);
    }, [setTabBarShow])
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location?.latitude || 37.4220936,
          longitude: location?.longitude || -122.083922,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: location?.latitude || 37.4220936,
            longitude: location?.longitude || -122.083922,
          }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
