import {
  Button,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { Card, Content, Footer } from "@/common/components/Card";
import { WalletConnect } from "@/common/components/WalletConnect";
import { useTemplate } from "@/common/providers/TemplateProvider";

export const ChooseTemplate = () => {
  const router = useRouter();

  const { template, setTemplate } = useTemplate();

  return (
    <Card maxWidth={900} minWidth={{ base: "full", md: 476 }}>
      <Content>
        <VStack gap={10}>
          <Heading pb={4}>Choose a template</Heading>
          <RadioGroup value={template} onChange={(val) => setTemplate(val)}>
            <Stack direction="row">
              <Radio value="bloombox">
                <Image
                  alt="bloombox"
                  src="/assets/images/deploy/bloombox.png"
                />
              </Radio>
              <Radio value="ethvillages">
                <Image
                  alt="ethvillages"
                  src="/assets/images/deploy/ethvillages.png"
                />
              </Radio>
              <Radio value="souperos">
                <Image
                  alt="souperos"
                  src="/assets/images/deploy/souperos.png"
                />
              </Radio>
            </Stack>
          </RadioGroup>
        </VStack>
      </Content>
      <Footer>
        <Flex justify="end">
          <Button
            width={{ base: "full", md: "auto" }}
            onClick={() => router.push("/deploy/info")}
          >
            Next
          </Button>
        </Flex>
      </Footer>
    </Card>
  );
};
