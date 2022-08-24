import { Box, Center, Flex, Heading, HStack, Spinner } from "@chakra-ui/react";
import { useAddress, useContract, useNFTDrop } from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { PageHead } from "@/common/components/PageHead";
import { WalletConnect } from "@/common/components/WalletConnect";
import { NFT_ADDRESS, STAKING_ADDRESS } from "@/common/configs";
import { loadStakedNfts } from "@/common/functions/stake";
import { useLoadClaimableRewards } from "@/common/hooks/useLoadClaimableRewards";

import { StakedNFT } from "@/modules/StakedNFT";
import { StatisticCard } from "@/modules/StatisticCard";
import { UnstakedNFT } from "@/modules/UnstakedNFT";

const StakePage = () => {
  // Wallet Connection Hooks
  const address = useAddress();

  // Contract Hooks
  const nftDropContract = useNFTDrop(NFT_ADDRESS);
  const { contract, isLoading } = useContract(STAKING_ADDRESS);
  const [stakedNfts, setStakedNfts] = useState<any[]>([]);
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);
  const [isLoadingNfts, setIsLoadingNfts] = useState<boolean>(true);
  const claimableRewards = useLoadClaimableRewards({ address, contract });
  const claimableRewardsFormatted = ethers.utils.formatUnits(
    claimableRewards,
    18
  );

  const loadNfts = useCallback(async () => {
    await loadStakedNfts(contract, nftDropContract, setStakedNfts, address);
  }, [address, contract, nftDropContract]);

  const loadOwnedNfts = useCallback(async () => {
    try {
      const userOwnedNfts = await nftDropContract.getOwned(address);
      setOwnedNFTs(userOwnedNfts);
    } catch (error) {
      setOwnedNFTs([]);
      toast.error(error.message);
    }
  }, [address, nftDropContract]);

  const fetchNftData = useCallback(() => {
    setIsLoadingNfts(true);
    Promise.all([loadNfts(), loadOwnedNfts()])
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoadingNfts(false);
      });
  }, [loadNfts, loadOwnedNfts]);

  const triggerStakeNft = (id: BigNumber) => {
    async function stakeNft(id: BigNumber) {
      if (!address) return;

      setIsLoadingNfts(true);
      const isApproved = await nftDropContract?.isApproved(
        address,
        STAKING_ADDRESS
      );
      // If not approved, request approval
      try {
        if (!isApproved) {
          await nftDropContract?.setApprovalForAll(STAKING_ADDRESS, true);
        }
        await contract?.call("stake", id);
      } catch (e) {
        toast.error(e.message);
      }
      fetchNftData();
    }

    toast.promise(stakeNft(id), {
      loading: "Staking nft",
      success: () => {
        return "Successfully staken nft!";
      },
      error: (error) => {
        console.error(error);
        return "Contact Administrator";
      },
    });
  };

  const triggerUnstakeNft = (id: BigNumber) => {
    async function unstakeNft(id: BigNumber) {
      setIsLoadingNfts(true);
      await contract?.call("withdraw", id);
      fetchNftData();
    }

    toast.promise(unstakeNft(id), {
      loading: "Unstaking nft",
      success: () => {
        return "Successfully unstaken nft!";
      },
      error: (error) => {
        console.error(error);
        return "Contact Administrator";
      },
    });
  };

  useEffect(() => {
    if (!contract) return;
    if (address) {
      fetchNftData();
    }
  }, [address, contract, nftDropContract, fetchNftData]);

  const percentageOfStakedNfts =
    (stakedNfts.length / (stakedNfts.length + ownedNFTs.length)) * 100 || 0;

  return (
    <div>
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <Flex flexDirection={"column"} pt={3} px={{ base: "20px", lg: "148px" }}>
        {isLoading ? (
          <Heading size={{ base: "xl", md: "2xl" }}>
            Loading <Spinner />
          </Heading>
        ) : address ? (
          <>
            <Box mb={12}>
              <Heading mb={4} size={{ base: "xl", md: "2xl" }}>
                Your $AFP stats
              </Heading>
              <Flex
                flexDir={{ base: "column", md: "row" }}
                flexWrap="wrap"
                gap={3}
              >
                <StatisticCard
                  footerStats={`${stakedNfts.length} staked`}
                  label="Total Staked"
                  mainStats={`${percentageOfStakedNfts}%`}
                />
                <StatisticCard label="Daily returns" mainStats="1 $AFP" />
                <StatisticCard
                  footerStats={`Estimated: ${claimableRewardsFormatted} $AFP`}
                  label="Your staked"
                  mainStats={`${claimableRewardsFormatted} $AFP`}
                />
              </Flex>
            </Box>
            <Box mb={12}>
              <Heading mb={4} size={"2xl"}>
                Your wallet
              </Heading>
              <Flex
                align={"flex-start"}
                flexDir={{ lg: "row", base: "column" }}
                gap={4}
              >
                <UnstakedNFT
                  isLoading={isLoadingNfts}
                  nfts={ownedNFTs}
                  onStake={triggerStakeNft}
                />
                <StakedNFT
                  isLoadingNfts={isLoadingNfts}
                  stakedNfts={stakedNfts}
                  onUnstake={triggerUnstakeNft}
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
