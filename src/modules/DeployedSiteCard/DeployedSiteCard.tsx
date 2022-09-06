import {
  Button,
  Center,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, Content, Footer, Header } from "@/common/components/Card";
import { WalletConnect } from "@/common/components/WalletConnect";

export const DeployedSiteCard = () => {
  const address = useAddress();
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const getPages = async () => {
      const response = await fetch(`/api/getPages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      });
      setPages(await response.json());
    };
    getPages();
  }, [address]);

  return (
    <>
      {address ? (
        <Card maxWidth={476} minWidth={{ base: "full", md: 600 }}>
          <Content>
            <Header>
              <VStack textAlign="center">
                <Heading pb={4}>Deployed Site Details</Heading>
              </VStack>
            </Header>
            <Center>
              <VStack>
                <TableContainer>
                  <Table variant="simple">
                    <TableCaption>Deployed Site Details</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Site Name</Th>
                        <Th>Deployment Status</Th>
                        <Th>Url</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {pages.map((item, i) => (
                        <Tr key={i}>
                          <Td>{item.title}</Td>
                          <Td>{item.status}</Td>
                          <Td>
                            {item.url ? (
                              <Link passHref href={item.url}>
                                <Text
                                  color="blue.500"
                                  cursor="pointer"
                                  decoration="underline"
                                >
                                  {item.url}
                                </Text>
                              </Link>
                            ) : (
                              item.url
                            )}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
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
      ) : (
        <WalletConnect />
      )}
    </>
  );
};
