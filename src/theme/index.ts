import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Spinner } from "./components/spinner";
import { Text } from "./components/text";
import { fonts } from "./fonts";

const theme = extendTheme({
  components: {
    Heading,
    Text,
    Button,
    Spinner,
  },
  fonts,
  colors,
  breakpoints,
});

export default theme;
