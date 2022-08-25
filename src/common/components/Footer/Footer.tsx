import { Box, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Box
    borderTop="1px"
    borderTopColor="gray.300"
    bottom="0px"
    position="fixed"
    py={4}
    width="100%"
  >
    <Text color="gray.400" pl={{ base: "20px", lg: "148px" }} size="md">
      © Airfoil nftOS
    </Text>
  </Box>
);
