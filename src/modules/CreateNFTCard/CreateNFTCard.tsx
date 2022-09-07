import { Center, Heading, Button, Text } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Card, Content, Footer } from "@/common/components/Card";
import { WalletConnect } from "@/common/components/WalletConnect";

export const CreateNFTCard = () => {
  const router = useRouter();
  const address = useAddress();
  const handleClick = () => {
    window.open(
      "https://thirdweb.com/dashboard",
      "_blank",
      "noopener,noreferrer"
    );
    router.push("/deploy/info");
  };
  return (
    <>
      {address ? (
        <Card maxWidth={476} minWidth={{ base: "full", md: 476 }}>
          <Content>
            <Center>
              <Heading pb={1}>Create NFT Contract</Heading>
            </Center>
            <Text color="gray.700" size="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </Content>
          <Footer>
            <Button width="full" onClick={handleClick}>
              <Link href="/deploy/info">Create with Thirdweb</Link>
            </Button>
          </Footer>
        </Card>
      ) : (
        <WalletConnect />
      )}
    </>
  );
};
