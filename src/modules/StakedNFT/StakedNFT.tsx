import { Box, Center, HStack, Spinner, Text, Flex } from "@chakra-ui/react";
import { BigNumber } from "ethers";

import { Card, Content, Header } from "@/common/components/Card";
import { UpArrowIcon } from "@/common/components/CustomIcon";
import { NFT } from "@/common/components/NFT";

export const StakedNFT = ({ isLoadingNfts, stakedNfts, onUnstake }) => {
  const onClickGenerator = (id: BigNumber) => () => onUnstake(id);
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
        {isLoadingNfts ? (
          <Center height={192}>
            <Spinner />
          </Center>
        ) : (
          <Flex flexWrap={"wrap"} gap={"20px 50px"}>
            {stakedNfts.map((nft, index) => (
              <NFT
                key={index}
                staked
                nftImg={nft.metadata.image}
                stakedAmount={0.3}
                tokenName="AFP"
                onClick={onClickGenerator(nft.metadata.id)}
              />
            ))}
          </Flex>
        )}
      </Content>
    </Card>
  );
};
