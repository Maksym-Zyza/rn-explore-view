import { StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useRef, useState } from "react";
import { colors } from "../styles/global";

const GooglePlacesInput = () => {
  const [address, setAddress] = useState("");
  const autocompleteRef = useRef(null);

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Місцевість..."
        // minLength={4}
        ref={autocompleteRef}
        enablePoweredByContainer={false}
        fetchDetails
        currentLocation
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setAddress(data.description);
        }}
        textInputProps={{
          value: address,
          onChangeText: setAddress,
        }}
        query={{ key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_API }}
        styles={styles}
      />
    </View>
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.border_gray,
  },
  row: {
    backgroundColor: colors.white,
    padding: 13,
    height: 44,
    flexDirection: "row",
  },
  predefinedPlacesDescription: {
    color: colors.orange,
  },
  listView: {
    maxHeight: 160,
  },
});
