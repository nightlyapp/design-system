import React from "react";
import { storiesOf } from "@storybook/react-native";
import { BufferView } from "../decorator";

import { Distance } from "../../../src/components/distance/Distance";

storiesOf("Distancia", module)
  .addDecorator(BufferView)
  .add("calc", () => (
    <Distance
      myLatitude={-8.023599}
      myLongitude={-34.861258}
      locationLatitude={-8.020008}
      locationLongitude={-34.855420}
    ></Distance>
  ));
