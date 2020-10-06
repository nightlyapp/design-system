import React from "react";
import { View } from "react-native";

export const BufferView = (storyFn: any) => (
  <View
    style={{
      flex: 1,
      paddingVertical: 40,
      marginTop: 40,
      paddingHorizontal: 20,
      backgroundColor: "#080715",
    }}
  >
    {storyFn()}
  </View>
);
