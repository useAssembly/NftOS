import { Button, Center, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { Card, Content, Footer, Header } from "@/common/components/Card";

export const DeployProgressCard = () => {
  return (
    <Card maxWidth={476} minWidth={{ base: "full", md: 476 }}>
      <Content>
        <Header>
          <Center>
            <Heading pb={4} textAlign="center">
              Deployment In Progress
            </Heading>
          </Center>
        </Header>
      </Content>
      <Footer>
        <Center>
          <Button width={{ base: "full", sm: "auto" }}>
            <Link href="/deploy/site">Check Progress</Link>
          </Button>
        </Center>
      </Footer>
    </Card>
  );
};
