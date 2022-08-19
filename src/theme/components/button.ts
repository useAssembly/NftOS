import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  sizes: {
    xs: {
      paddingY: 2,
      paddingX: 3,
      height: "37px",
      fontSize: "xs",
      borderRadius: "lg",
    },
    md: {
      paddingY: 4,
      paddingX: 2.5,
      fontSize: "md",
      borderRadius: "md",
    },
  },
  variants: {
    primary: {
      color: "white",
      bgColor: "teal.500",
      _hover: {
        opacity: 0.8,
        _disabled: {
          opacity: 0.5,
          bgColor: "teal.500",
        },
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    outline: {
      color: "gray.200",
      bgColor: "transparent",
      borderColor: "gray.200",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "xs",
  },
};
