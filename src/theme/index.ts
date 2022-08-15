import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { fonts } from "./fonts";

const theme = extendTheme({
  components: {
    Heading,
    Text,
    Button,
  },
  fonts,
  colors,
});

export default theme;
