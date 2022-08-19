import { Flex, Heading, HStack } from "@chakra-ui/react";

import { LightningIcon, UpArrowIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";

import { PageLink } from "@/modules/PageLink";

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <Flex flexDirection={"column"} pt="52px" px="148px">
        <Heading fontWeight={600} mb={4} size={"2xl"}>
          Where do you want to go?
        </Heading>
        <HStack spacing={3}>
          <PageLink
            description="Mint new NFTs"
            icon={<LightningIcon />}
            label="Mint"
            linkHref="/mint"
          />
          <PageLink
            description="Earn funds"
            icon={<UpArrowIcon />}
            label="Stake"
            linkHref="/stake"
          />
        </HStack>
      </Flex>
    </div>
  );
}
