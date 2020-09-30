import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BufferView } from "../decorator";

import { Title } from "../../../src/components/title/Title";

storiesOf("Titulo", module)
  .addDecorator(BufferView)
  .add("titulo h1", () => (
    <Title fontSize={'xxxg'} text={'Helio e Caio'} >Press Me</Title>
    ))
    .add("Titulo Sucesso", () => (
      <Title color="success" fontSize={'xxxg'} text={'Helio e Caio'} >Press Me</Title>
  ));
