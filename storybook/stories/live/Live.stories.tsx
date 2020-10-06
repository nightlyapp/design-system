import React from "react";
import { storiesOf } from "@storybook/react-native";
import { BufferView } from "../decorator";

import { Live } from "../../../src/components/live/Live";

storiesOf("Ao vivo", module)
  .addDecorator(BufferView)
  .add("Online", () => <Live musicGender="Pagode" isLive="true"></Live>)
  .add("Offline", () => <Live musicGender="Sertanejo" isLive="0"></Live>);
