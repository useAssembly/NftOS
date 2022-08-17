import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { Card, Header, Content } from "@/common/components/Card";
import { NFT } from "@/common/components/NFT";

const nftImages = [
  "/assets/images/black_circle.png",
  "/assets/images/nft1.png",
  "/assets/images/nft2.png",
];

export const UnstakedNFT = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Card width="600px">
      <Header mb={4}>
        <Text color="black" fontWeight={600}>
          Unstaked
        </Text>
      </Header>
      <Content>
        {isOpen ? (
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
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <NFT key={index} nftImg={nftImages[index]} staked={false} />
            ))}
        </Flex>
      </Content>
    </Card>
  );
};
