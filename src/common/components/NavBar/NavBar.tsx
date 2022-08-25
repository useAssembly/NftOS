import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavBar = () => {
  const router = useRouter();
  const lastRoute = router.pathname.split("/").pop();
  const name = lastRoute ? lastRoute : "Home";
  const isHomePage = name.toLowerCase() === "home";

  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="gray.300"
        mb={!isHomePage ? 0 : 4} // If home page, add more margin bottom
        pl={{ base: "20px", lg: "148px" }}
        py={4}
      >
        <Text fontSize="xl" textTransform="capitalize">
          {name.replace("-", " ")}
        </Text>
      </Box>
      {!isHomePage ? (
        <Box py={4}>
          <Link href={"/"}>
            <Text cursor="pointer" pl={{ base: "20px", lg: "148px" }}>
              {"<- Back home"}
            </Text>
          </Link>
        </Box>
      ) : null}
    </>
  );
};
