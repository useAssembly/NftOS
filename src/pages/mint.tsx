import { Heading, Text } from "@chakra-ui/react";

import { Card, Content, Header } from "@/common/components/Card";
import { PageHead } from "@/common/components/PageHead";

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <section className="grid place-content-center h-full">
        <Card>
          <Header>
            <Heading color="gray.900">Mint an Airfoil Pass</Heading>
          </Header>
          <Content>
            <Text size="sm">
              You don’t currently own an Airfoil pass. <br /> Please mint one
              with the button below.
            </Text>
          </Content>
        </Card>
      </section>
    </div>
  );
}
