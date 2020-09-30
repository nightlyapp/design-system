import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from './storyLoader';
import 'react-native-get-random-values';

import './rn-addons'

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: "localhost",
  asyncStorage:
    require("@react-native-community/async-storage").AsyncStorage ||
    require("react-native").AsyncStorage ||
    null,
});

export default StorybookUIRoot;
