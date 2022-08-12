import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  sizes: {
    xs: {
      paddingY: 2,
      paddingX: 3,
      height: "37px",
      fontSize: "xs",
      lineHeight: "16px",
      borderRadius: "lg",
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
  },
  defaultProps: {
    variant: "primary",
    size: "xs",
  },
};
