import { Badge, Box, Button, Text, useToken, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { LightningIcon } from "../CustomIcon";

const IMAGE_SIZE = 132;

type Staked = {
  staked: true;
  stakedAmount: number;
  tokenName: string;
};
type UnStaked = {
  staked: false;
  stakedAmount?: undefined;
  tokenName?: undefined;
};

type NFTProps = {
  nftImg: string;
  onClick?: () => void;
} & (Staked | UnStaked);

export const NFT = ({
  staked,
  stakedAmount,
  tokenName,
  nftImg,
  onClick,
}: NFTProps) => {
  const [gray600] = useToken("colors", ["gray.600"]);
  return (
    <VStack position="relative" spacing="-1px">
      <Box
        borderColor={"gray.200"}
        borderTopRadius={16}
        borderWidth={"1px"}
        height={IMAGE_SIZE}
      >
        <Image
          alt="nft"
          height={IMAGE_SIZE}
          src={nftImg}
          style={{ borderTopRightRadius: "16px", borderTopLeftRadius: "16px" }}
          width={IMAGE_SIZE}
        />
      </Box>
      <Box rowGap={1} style={{ marginTop: 0 }} width="140px">
        <Button
          color="gray.700"
          height={staked ? 9 : 10}
          leftIcon={
            staked ? (
              <LightningIcon fill={gray600} height={12} width={12} />
            ) : null
          }
          size="md"
          variant="outline"
          width="140px"
          onClick={onClick}
        >
          {staked ? <Text size="xs">Unstake</Text> : "Stake"}
        </Button>
        {staked ? (
          <Box textAlign="center">
            <Badge color="gray.800">{`+ ${stakedAmount} \$${tokenName}`}</Badge>
          </Box>
        ) : null}
      </Box>
    </VStack>
  );
};
