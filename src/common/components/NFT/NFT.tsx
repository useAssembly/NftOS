import { Badge, Box, Button, Text, useToken } from "@chakra-ui/react";
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
    <Box borderTopRadius={16} height={IMAGE_SIZE} position="relative">
      <Image alt="nft" height={IMAGE_SIZE} src={nftImg} width={IMAGE_SIZE} />
      <Box
        left="50%"
        position="absolute"
        rowGap={1}
        top="calc(100% - 1px)" // 1px is the border-top
        transform={`translateX(-50%)`}
        width="140px"
      >
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
            <Badge width="">{`+ ${stakedAmount} \$${tokenName}`}</Badge>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
