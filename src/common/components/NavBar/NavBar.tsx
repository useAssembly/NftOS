import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const NavBar = () => {
  const router = useRouter();
  const lastRoute = router.pathname.split("/").pop();
  const name = lastRoute ? lastRoute : "Home";

  return (
    <Box
      borderBottom="1px"
      borderColor="gray.300"
      color="gray.900"
      fontSize="xl"
      pl="148px"
      py={4}
      textTransform="capitalize"
    >
      {name.replace("-", " ")}
    </Box>
  );
};
