import { Box, Flex, Heading, HStack } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { StakedNFT } from "@/modules/\bStakedNFT";
import { UnstakedNFT } from "@/modules/UnstakedNFT";

const StakePage = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <Flex flexDirection={"column"} pt={3} px={"148px"}>
        <Box mb={12}>
          <Heading mb={4} size={"2xl"}>
            Your $AFP stats
          </Heading>
          <HStack spacing={3}>
            {Array()
              .fill("_")
              .map((_, i) => (
                <Box
                  key={i}
                  bg={"coral"}
                  borderRadius={12}
                  height={"148px"}
                  width={"225px"}
                />
              ))}
          </HStack>
        </Box>
        <Box mb={12}>
          <Heading mb={4} size={"2xl"}>
            Your wallet
          </Heading>
          <HStack align={"flex-start"} spacing={4}>
            <UnstakedNFT />
            <StakedNFT />
          </HStack>
        </Box>
      </Flex>
    </div>
  );
};

export default StakePage;
