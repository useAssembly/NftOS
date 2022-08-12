import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
  sizes: {
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    md: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 500,
    },
  },
  baseStyle: {
    color: "gray.900",
  },
};
