import React from "react";
import { Text } from "react-native";
import { fontColor } from "../assets/style/color";
import { size } from "../assets/style/size";
import { useFonts } from "expo-font";

type Title = {
  text: string;
  fontSize?: string;
  color?: string;
};

const Title: React.FC<Title> = ({
  text = "",
  fontSize = "m",
  color = "primary",
}) => {
  const [loaded] = useFonts({
    EnglishMedium: require("../assets/font/EnglishMedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={{
        color: fontColor[color],
        fontSize: size[fontSize],
        fontFamily: "EnglishMedium",
      }}
    >
      {text}
    </Text>
  );
};

export { Title };
