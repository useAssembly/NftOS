import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { Button } from "./components/button";

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
