import { Box, Button, Text, useToken, VStack } from "@chakra-ui/react";
import Image from "next/image";

const IMAGE_SIZE = 132;

type NFTProps = {
  nftImg: string;
  onClick?: () => void;
};

export const Lootbox = ({ nftImg, onClick }: NFTProps) => {
  const [gray600] = useToken("colors", ["gray.600"]);
  return (
    <VStack borderTopRadius={16} position="relative" spacing="-1px">
      <Box height={IMAGE_SIZE}>
        <Image
          alt="nft"
          height={IMAGE_SIZE}
          src={nftImg}
          style={{ borderTopRightRadius: "16px", borderTopLeftRadius: "16px" }}
          width={IMAGE_SIZE}
        />
      </Box>
      <Box rowGap={1} width="140px">
        <Button
          color="teal.500"
          height={10}
          size="md"
          variant="outline"
          width="140px"
          onClick={onClick}
        >
          <Text>Open</Text>
        </Button>
      </Box>
    </VStack>
  );
};
