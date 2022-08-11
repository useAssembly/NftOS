import { Box, BoxProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export interface BoxPropsWithStyles extends BoxProps {
  fullWidth?: boolean;
}

export const Card = forwardRef<HTMLDivElement, BoxPropsWithStyles>(
  ({ fullWidth = false, width = "auto", children, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        bg="white"
        borderRadius={16}
        height="fit-content"
        padding={7} // 28px
        width={fullWidth ? "100%" : width}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);
Card.displayName = "Card";

export const Header = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} mb={7} {...rest}>
        {children}
      </Box>
    );
  }
);
Header.displayName = "Header";

export const Content = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);
Content.displayName = "Content";

export const Footer = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} mt={6} {...rest}>
        {children}
      </Box>
    );
  }
);
Footer.displayName = "Footer";

const _default = Object.assign(Card, { Header, Content, Footer });

export default _default;
