import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import { fontColor } from "../assets/style/color";
import { size } from "../assets/style/size";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    paddingVertical: size.xxp,
    paddingHorizontal: size.xxp,
    borderRadius: size.xxp,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: "transparent",
  },

  text: {
    color: fontColor.white,
    alignSelf: "center",
    fontSize: size.xxxg,
    fontFamily: "EnglishMedium",
  },
  textOutline: {},
});

export const Button = ({
  onPress = () => {},
  children = "",
  outline = false,
}) => {
  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  const containerStyles: any[] = [styles.container];
  const textStyles: any[] = [styles.text];

  if (outline) {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[fontColor.secondary, fontColor.primary]}
        style={containerStyles}
        start={{ x: 1.2, y: 0 }}
        locations={[0, 0.8]}
      >
        <Text style={textStyles}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
