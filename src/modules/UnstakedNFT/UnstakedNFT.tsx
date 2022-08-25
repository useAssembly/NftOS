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
import { BigNumber } from "ethers";

import { Card, Content, Header } from "@/common/components/Card";
import { NFT } from "@/common/components/NFT";

type UnStakedNFTProps = {
  isLoading: boolean;
  nfts: any[];
  onStake: (id: BigNumber) => void;
};
export const UnstakedNFT = ({ nfts, isLoading, onStake }: UnStakedNFTProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const onClickGenerator = (id: BigNumber) => () => onStake(id);

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
                <AlertTitle color="gray.700">
                  You could be making 3.0 $AFP daily.
                </AlertTitle>
                <AlertDescription color="gray.700">
                  01h 32m in next payout
                </AlertDescription>
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
        <Flex flexWrap={"wrap"} gap={"20px 50px"}>
          {nfts.map((item, index) => (
            <NFT
              key={index}
              nftImg={item.metadata.image}
              staked={false}
              onClick={onClickGenerator(item.metadata.id)}
            />
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
      <Content>{renderCardContent()}</Content>
    </Card>
  );
};
