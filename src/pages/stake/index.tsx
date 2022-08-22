import { Box, Center, Flex, Heading, HStack, Spinner } from "@chakra-ui/react";
import { useAddress, useContract, useNFTDrop } from "@thirdweb-dev/react";
import { useCallback, useEffect, useState } from "react";

import { PageHead } from "@/common/components/PageHead";
import { WalletConnect } from "@/common/components/WalletConnect";
import { loadStakedNfts } from "@/common/functions/stake";

import { StakedNFT } from "@/modules/StakedNFT";
import { StatisticCard } from "@/modules/StatisticCard";
import { UnstakedNFT } from "@/modules/UnstakedNFT";

const StakePage = () => {
  // Wallet Connection Hooks
  const address = useAddress();

  // Contract Hooks
  const nftDropContract = useNFTDrop(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
  );
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS ?? ""
  );
  const [stakedNfts, setStakedNfts] = useState<any[]>([]);
  const [isLoadingNfts, setIsLoadingNfts] = useState<boolean>(true);

  const loadNfts = useCallback(async () => {
    await loadStakedNfts(contract, nftDropContract, setStakedNfts, address);
  }, [address, contract, nftDropContract]);

  useEffect(() => {
    if (!contract) return;
    if (address) {
      loadNfts().then(() => setIsLoadingNfts(false));
    }
  }, [address, contract, loadNfts, nftDropContract]);

  return (
    <div>
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <Flex flexDirection={"column"} pt={3} px={"148px"}>
        {isLoading ? (
          <Heading size={"2xl"}>
            Loading <Spinner />
          </Heading>
        ) : address ? (
          <>
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
              <Flex
                align={"flex-start"}
                flexDir={{ md: "row", sm: "column" }}
                gap={4}
              >
                <UnstakedNFT />
                <StakedNFT
                  isLoadingNfts={isLoadingNfts}
                  stakedNfts={stakedNfts}
                />
              </Flex>
            </Box>
          </>
        ) : (
          <Center height={"calc(100vh - 176px)"}>
            <WalletConnect />
          </Center>
        )}
      </Flex>
    </div>
  );
};

export default StakePage;
