import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { size } from "../assets/style/size";
import { fontColor } from "../assets/style/color";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  text: {},
  iconContainer: {
    width: size.xxxg * 2,
    alignItems: "center",
    borderRadius: size.xxg * 2,
    zIndex: 2,
  },
  inputContainer: {
    height: size.xxxxxg * 2,
    zIndex: 1,
    paddingLeft: 2,
    borderWidth: 2,
    justifyContent: "center",
    borderColor: fontColor.primary,
    borderRadius: size.xxg * 2,
    overflow: "hidden",
  },
  textInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: fontColor.white,
    fontSize: size.g,
    paddingLeft: size.xxg * 2,
    fontFamily: "EnglishMedium",
    paddingRight: size.m * 2,
  },

  closeIcon: {
    width: size.xg * 2,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    top: 0,
    borderRadius: size.xxg * 2,
    zIndex: 2,
  },
});

type Live = {
  isLive: string;
  musicGender: string;
};

const Search: React.FC<any> = ({
  placeholder = "Pesquisar",
  onKeyPress = () => {},
}) => {
  let textInput: TextInput | null;
  const minWidth = size.xxxxxg * 2;
  const [widthValue, setWidthValue] = React.useState(minWidth);
  const [borderValue, setBorderValue] = React.useState(0);
  const [animatedBorder] = React.useState(new Animated.Value(0));
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const animatedWidth = React.useRef(new Animated.Value(minWidth)).current;
  const boxInterpolation = animatedBorder.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", fontColor.primary],
  });

  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  const animationStructure = (
    firstAnimation: Animated.Value,
    lastAnimation: Animated.Value,
    firtValue: number,
    lastValue: number
  ) => {
    return Animated.timing(firstAnimation, {
      toValue: firtValue,
      duration: 50,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(lastAnimation, {
        toValue: lastValue,
        duration: 50,
        useNativeDriver: false,
      }).start();
    });
  };

  const handleAnimate = (
    animatedWidth: Animated.Value,
    animatedBorder: Animated.Value,
    widthAnim: number,
    borderAnim: number
  ) => {
    if (borderAnim == 1) {
      animationStructure(animatedBorder, animatedWidth, borderAnim, widthAnim);
    } else {
      animationStructure(animatedWidth, animatedBorder, widthAnim, borderAnim);
    }
  };

  const clickToAnimate = () => {
    const borderAnimate = borderValue === 0 ? 1 : 0;
    const widthAnimate = widthValue === minWidth ? 100 : minWidth;
    setBorderValue(borderAnimate);
    setWidthValue(widthAnimate);
    handleAnimate(animatedWidth, animatedBorder, widthAnimate, borderAnimate);
    setIsSearchOpen(!isSearchOpen);
  };

  const clearInputText = () => {
    textInput?.clear();
  };

  return (
    <View
      style={{
        flex: 1,
        height: size.xxxg * 2,
      }}
    >
      <Animated.View
        style={[
          styles.inputContainer,
          {
            flex: animatedWidth,
            borderColor: boxInterpolation,
          },
        ]}
      >
        <TouchableWithoutFeedback onPress={clickToAnimate}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-search" size={size.xxxxxg} color="white" />
          </View>
        </TouchableWithoutFeedback>
        {isSearchOpen ? (
          <TextInput
            ref={(input) => {
              textInput = input;
            }}
            onKeyPress={onKeyPress}
            placeholderTextColor={fontColor.placeholder}
            autoFocus={true}
            style={styles.textInput}
            placeholder={placeholder}
          ></TextInput>
        ) : null}
        {isSearchOpen ? (
          <TouchableWithoutFeedback onPress={clearInputText}>
            <View style={styles.closeIcon}>
              <Ionicons name="md-close" size={size.xg} color="white" />
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </Animated.View>
    </View>
  );
};

export { Search };
