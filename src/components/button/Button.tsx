import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import {fontColor } from "../style/color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: fontColor.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: fontColor.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: "transparent",
    borderColor: fontColor.border,
  },

  text: {
    color: fontColor.white,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textOutline: {
    color: fontColor.primary,
  },
});

export const Button = ({
  onPress = () => {},
  children = "",
  outline = false,
}) => {
  const containerStyles: any[] = [styles.container];
  const textStyles: any[] = [styles.text];

  if (outline) {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
