import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fontColor } from "../assets/style/color";
import { size } from "../assets/style/size";
import { useFonts } from "expo-font";

import { Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  text: {},
  iconContainer: {
    backgroundColor: "#080715",
    width: size.xxxg * 2,
    height: size.xxxg * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: size.xxg * 2,
    zIndex: 2,
  },
  inputContainer: {
    backgroundColor: "#080715",
    height: size.xxxxxg * 2,
    position: "absolute",
    top: -4,
    left: -4,
    zIndex: 1,
    borderWidth: 0,
    borderColor: "#8E2DE2",
    borderRadius: size.xxg * 2,
  },
});

type Live = {
  isLive: string;
  musicGender: string;
};

const Search: React.FC<any> = () => {
  const minWidth = size.xxxxxg * 2;
  const animatedWidth = React.useRef(new Animated.Value(minWidth)).current;
  const animatedBorder = React.useRef(new Animated.Value(0)).current;

  const [widthValue, setWidthValue] = React.useState(minWidth);
  const [borderValue, setBorderValue] = React.useState(0);

  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  const handleAnimate = (widthAnim: number, borderAnim: number) => {
    Animated.timing(animatedBorder, {
      toValue: borderAnim,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedWidth, {
      toValue: widthAnim,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const clickToAnimate = () => {
    const borderAnimate = borderValue === 0 ? 2 : 0;
    const widthAnimate = widthValue === minWidth ? 200 : minWidth;
    setBorderValue(borderAnimate);
    setWidthValue(widthAnimate);
    handleAnimate(widthAnimate, borderAnimate);
  };

  return (
    <View>
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={clickToAnimate}
          name="md-search"
          size={size.xxxxxg}
          color="white"
        />
      </View>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            width: animatedWidth,
            borderWidth: animatedBorder,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export { Search };
