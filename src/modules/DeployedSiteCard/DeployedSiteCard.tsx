import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { Card, Content, Footer, Header } from "@/common/components/Card";

const sites = [
  { name: "nftmint.xyz", url: "https://nftmint.xyz" },
  { name: "opensea.io", url: "https://opensea.io/" },
];

export const DeployedSiteCard = () => {
  return (
    <Card maxWidth={476} minWidth={{ base: "full", md: 476 }}>
      <Content>
        <Header>
          <VStack textAlign="center">
            <Heading pb={4}>Deployed Site Details</Heading>
            <Text>Deployment Status: Pending</Text>
          </VStack>
        </Header>
        <Center>
          <VStack>
            {sites.map((item, i) => (
              <HStack key={i}>
                <Text>Site: </Text>
                <Link passHref href={item.url}>
                  <Text
                    color="blue.500"
                    cursor="pointer"
                    decoration="underline"
                  >
                    {item.name}
                  </Text>
                </Link>
              </HStack>
            ))}
          </VStack>
        </Center>
      </Content>
      <Footer>
        <Flex justify="end">
          <Button>
            <Link href="/">Home</Link>
          </Button>
        </Flex>
      </Footer>
    </Card>
  );
};
