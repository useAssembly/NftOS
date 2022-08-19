import { Box, Flex, Heading, HStack } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { StakedNFT } from "@/modules/\bStakedNFT";
import { StatisticCard } from "@/modules/StatisticCard";
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
            <StatisticCard
              footerStats="1052 staked"
              label="Total Staked"
              mainStats="60.6%"
            />
            <StatisticCard
              footerStats="01h 22m to next payout"
              label="Daily returns"
              mainStats="1 $AFP"
            />
            <StatisticCard
              footerStats="Estimated: 3 $AIR"
              label="Your staked"
              mainStats="3 $AFP"
            />
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
