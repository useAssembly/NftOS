import {
  Box,
  Button,
  Center,
  HStack,
  Spinner,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { BigNumber } from "ethers";

import { Card, Content, Header } from "@/common/components/Card";
import { UpArrowIcon } from "@/common/components/CustomIcon";
import { NFT } from "@/common/components/NFT";

export const StakedNFT = ({
  isLoadingNfts,
  stakedNfts,
  onUnstake,
  claimableRewards,
  isClaimingRewards,
  triggerClaimRewards,
}) => {
  const onClickGenerator = (id: BigNumber) => () => onUnstake(id);
  return (
    <Card width={{ base: "100%", lg: "600px" }}>
      <Header mb={4}>
        <HStack justifyContent="space-between">
          <HStack>
            <Box>
              <UpArrowIcon />
            </Box>
            <Text color="black" fontWeight={600}>
              Staked
            </Text>
          </HStack>
          {claimableRewards > 0 && (
            <Button disabled={isClaimingRewards} onClick={triggerClaimRewards}>
              Claim Rewards
            </Button>
          )}
        </HStack>
      </Header>
      <Content>
        <SimpleGrid minChildWidth="132px" spacing="16px">
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
                onClick={onClickGenerator(nft.metadata.id)}
              />
            ))
          )}
        </SimpleGrid>
      </Content>
    </Card>
  );
};
