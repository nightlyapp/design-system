import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { fontColor } from "../assets/style/color";
import { size } from "../assets/style/size";

import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: fontColor.white,
    fontSize: size.xxp,
    fontFamily: "EnglishMedium",
  },
  circle: {
    width: size.xp,
    height: size.xp,
    marginLeft: size.xxxxxxp,
    borderRadius: size.xxxxxxp * 2,
  },
});

type Live = {
  isLive: string;
  musicGender: string;
};

const Live: React.FC<Live> = ({ isLive = false, musicGender = "" }) => {
  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  const bool = primitiveToBoolean(isLive);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{musicGender}, AO VIVO</Text>
      <View
        style={{ ...styles.circle, backgroundColor: bool ? "#08FF00" : "gray" }}
      ></View>
    </View>
  );

  function primitiveToBoolean(
    value: string | number | boolean | null | undefined
  ): boolean {
    if (typeof value === "string") {
      return value.toLowerCase() === "true" || !!+value;
    }

    return !!value;
  }
};

export { Live };
