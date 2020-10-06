import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { fontColor } from "../assets/style/color";
import { size } from "../assets/style/size";

import { useFonts } from "expo-font";

type Distance = {
  myLatitude: number;
  myLongitude: number;
  locationLatitude: number;
  locationLongitude: number;
};

const styles = StyleSheet.create({
  text: {
    color: fontColor.white,
    fontSize: size.xxp,
    fontFamily: "EnglishMedium",
  },
});

const Distance: React.FC<Distance> = ({
  myLatitude = 59.3293371,
  myLongitude = 13.4877472,
  locationLatitude = 59.3225525,
  locationLongitude = 13.4619422,
}) => {
  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  const distance = distanceCalc(
    myLatitude,
    myLongitude,
    locationLatitude,
    locationLongitude
  );

  const kilometers = distance;

  return (
    <Text style={styles.text}>
      {kilometers > 0.5 ? kilometers.toFixed(1) + "km" : "Próximo"}
    </Text>
  );

  function distanceCalc(
    myLatitude: number,
    myLongitude: number,
    locationLatitude: number,
    locationLongitude: number
  ) {
    const radianos = 0.017453292519943295;
    const cosine = Math.cos;
    const a =
      0.5 -
      cosine((locationLatitude - myLatitude) * radianos) / 2 +
      (cosine(myLatitude * radianos) *
        cosine(locationLatitude * radianos) *
        (1 - cosine((locationLongitude - myLongitude) * radianos))) /
        2;

    return 12742 * Math.asin(Math.sqrt(a));
  }
};

export { Distance };
