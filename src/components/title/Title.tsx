import React from "react";
import { Text } from "react-native";
import { fontColor } from "../style/color";
import { size } from "../style/size";
import { useFonts } from "expo-font";

const Title: React.FC<Title> = ({
  text = "",
  fontSize = "m",
  color = "primary",
}) => {
  const [loaded] = useFonts({
    EnglishMedium: require("../font/EnglishMedium.otf"),
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

type Title = {
  text: string;
  fontSize?: string;
  color?: string;
};
