import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { Heading } from "./components/heading";
import { Text } from "./components/text";

const theme = extendTheme({
  components: {
    Heading,
    Text,
  },
  fonts,
  colors,
});

export default theme;
