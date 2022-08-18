import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Card, Content, Header } from "@/common/components/Card";
import { UpArrowIcon } from "@/common/components/CustomIcon";
import { NFT } from "@/common/components/NFT";

const nftImages = [
  "/assets/images/black_circle.png",
  "/assets/images/nft3.png",
  "/assets/images/nft4.png",
];
export const StakedNFT = () => {
  return (
    <Card width="600px">
      <Header mb={4}>
        <HStack>
          <Box>
            <UpArrowIcon />
          </Box>
          <Text color="black" fontWeight={600}>
            Staked
          </Text>
        </HStack>
      </Header>
      <Content>
        <Flex justifyContent="space-around">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <NFT
                key={index}
                staked
                nftImg={nftImages[index]}
                stakedAmount={0.3}
                tokenName="AFP"
              />
            ))}
        </Flex>
      </Content>
    </Card>
  );
};
