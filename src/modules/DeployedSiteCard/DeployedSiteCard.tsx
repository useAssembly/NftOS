import { Button, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { Card, Content, Footer, Header } from "@/common/components/Card";

const sites = ["https://nftmint.xyz"];

export const DeployedSiteCard = () => {
  return (
    <Card maxWidth={476} minWidth={{ base: "full", md: 476 }}>
      <Content>
        <Header>
          <Center>
            <Heading pb={4}>Deployed Site</Heading>
          </Center>
        </Header>
        <Center>
          <VStack>
            {sites.map((item, i) => (
              <Link key={i} passHref href={item}>
                <Text color="blue.500" cursor="pointer" decoration="underline">
                  {item}
                </Text>
              </Link>
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
