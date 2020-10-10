import React from "react";
import { storiesOf } from "@storybook/react-native";
import { BufferView } from "../decorator";

import { Search } from "../../../src/components/search/Search";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";

storiesOf("Pesquisa", module)
  .addDecorator(BufferView)
  .add("padrao", () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Search
          placeholder="Pesquisar local"
          onKeyPress={action("tapped-default")}
        ></Search>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 40 * 2,
            marginLeft: 10,
            backgroundColor: "#8E2DE2",
          }}
        ></View>
      </View>
    );
  });
