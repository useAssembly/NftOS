import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useNFTDrop,
  useOwnedNFTs,
  usePack,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Lootbox } from "@/common/components/Lootbox";
import { NFT } from "@/common/components/NFT";
import { PageHead } from "@/common/components/PageHead";
import { WalletConnect } from "@/common/components/WalletConnect";
import { NFT_ADDRESS, STAKING_ADDRESS } from "@/common/configs";
import { loadStakedNfts } from "@/common/functions/stake";

const StakePage = () => {
  // Wallet Connection Hooks
  const address = useAddress();

  // Contract Hooks
  const nftDropContract = useNFTDrop(NFT_ADDRESS);
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);
  const { contract, isLoading } = useContract(STAKING_ADDRESS);
  const [isLoadingNfts, setIsLoadingNfts] = useState<boolean>(true);

  const pack = usePack("0xcc57DDbD550060069c716340d8298Edf12c6D8a0");
  const { data: nfts } = useOwnedNFTs(pack, address);

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
    Promise.all([loadOwnedNfts()])
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoadingNfts(false);
      });
  }, [loadOwnedNfts]);

  useEffect(() => {
    if (!contract) return;
    if (address) {
      fetchNftData();
    }
  }, [address, contract, nftDropContract, fetchNftData]);

  console.log(nfts);

  return (
    <div>
      <PageHead
        append={false}
        description="Lootbox page description"
        name="Lootbox"
      />
      <Flex flexDirection={"column"} pt={3} px={"148px"}>
        {isLoading ? (
          <Heading size={"2xl"}>
            Loading <Spinner />
          </Heading>
        ) : address ? (
          <>
            <Box display="flex" justifyContent="center">
              {!nfts ? (
                <Button width="fit-content">Claim lootbox</Button>
              ) : (
                <>
                  {nfts.map((item, index) => (
                    <Lootbox key={index} nftImg={item.metadata.image} />
                  ))}
                </>
              )}
            </Box>
            <SimpleGrid minChildWidth="120px" spacing="50px">
              {ownedNFTs.map((item, index) => (
                <NFT key={index} nftImg={item.metadata.image} staked={false} />
              ))}
            </SimpleGrid>
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
