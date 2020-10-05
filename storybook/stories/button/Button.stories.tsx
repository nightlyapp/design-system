import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BufferView } from "../decorator";

import { Button } from "../../../src/components/button/Button";

storiesOf("Button", module)
  .addDecorator(BufferView)
  .add("primario", () => (
    <Button onPress={action("tapped-default")}>PARTIU!</Button>
  ))