import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { Card, Content, Header } from "@/common/components/Card";
import { UpArrowIcon } from "@/common/components/CustomIcon";
import { NFT } from "@/common/components/NFT";

export const StakedNFT = ({ isLoadingNfts, stakedNfts }) => {
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
        <SimpleGrid minChildWidth="120px" spacing="50px">
          {isLoadingNfts ? (
            <Center height={192}>
              <Spinner color="gray.600" />
            </Center>
          ) : (
            stakedNfts.map((nft, index) => (
              <NFT
                key={index}
                staked
                nftImg={nft.metadata.image}
                stakedAmount={0.3}
                tokenName="AFP"
              />
            ))
          )}
        </SimpleGrid>
      </Content>
    </Card>
  );
};
