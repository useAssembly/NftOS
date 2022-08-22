import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  CloseButton,
  Flex,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useAddress, useNFTDrop } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

import { Card, Content, Header } from "@/common/components/Card";
import { NFT } from "@/common/components/NFT";

export const UnstakedNFT = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const walletAddress = useAddress();
  const nftDropContract = useNFTDrop(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
  );

  const fetchOwnedNft = async () => {
    setIsLoading(true);
    setErrMsg("");
    try {
      const userOwnedNfts = await nftDropContract.getOwned(walletAddress);
      setNfts(userOwnedNfts);
    } catch (error) {
      setNfts([]);
      setErrMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      fetchOwnedNft();
    } else {
      setErrMsg("Please connect to wallet to see NFTs");
    }
  }, [walletAddress]);

  const renderCardContent = () => {
    if (nfts.length < 1 && !isLoading) {
      return <Text>Not owned any NFTs</Text>;
    }
    return !isLoading ? (
      <>
        {isOpen && nfts.length > 0 ? (
          <Alert
            justifyContent="space-between"
            mb={4}
            status="info"
            variant="left-accent"
          >
            <Flex>
              <AlertIcon />
              <Box>
                <AlertTitle>You could be making 3.0 $AFP daily.</AlertTitle>
                <AlertDescription>01h 32m in next payout</AlertDescription>
              </Box>
            </Flex>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        ) : null}
        <Flex justifyContent="space-around">
          {nfts.map((item, index) => (
            <NFT key={index} nftImg={item.metadata.image} staked={false} />
          ))}
        </Flex>
      </>
    ) : (
      <Center marginY={16}>
        <Spinner />
      </Center>
    );
  };

  return (
    <Card width="600px">
      <Header mb={4}>
        <Text color="black" fontWeight={600}>
          Unstaked
        </Text>
      </Header>
      <Content>
        {errMsg ? <Text color="red">{errMsg}</Text> : renderCardContent()}
      </Content>
    </Card>
  );
};
