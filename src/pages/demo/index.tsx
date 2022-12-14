import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

import {
  LightningIcon,
  TickIcon,
  UpArrowIcon,
} from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";

import { PageLink } from "@/modules/PageLink";

export default function Home() {
  const isFull = useBreakpointValue({ base: true, md: false });
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Demo page description"
        name="Demo"
      />
      <Flex
        flexDirection={"column"}
        pt={{ base: "24px", lg: "52px" }}
        px={{ base: "20px", lg: "148px" }}
      >
        <Heading fontWeight={600} mb={4} size={{ base: "xl", md: "2xl" }}>
          Where do you want to go?
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
          <PageLink
            description="Mint new NFTs"
            full={isFull}
            icon={<LightningIcon />}
            label="Mint"
            linkHref="/demo/mint"
          />
          <PageLink
            description="Earn funds"
            full={isFull}
            icon={<UpArrowIcon />}
            label="Stake"
            linkHref="/demo/stake"
          />
        </Flex>
      </Flex>
    </div>
  );
}
