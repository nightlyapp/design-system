import React from "react";
import { storiesOf } from "@storybook/react-native";
import { BufferView } from "../decorator";

import { Search } from "../../../src/components/search/Search";

storiesOf("Pesquisa", module)
  .addDecorator(BufferView)
  .add("padrao", () => <Search></Search>)
