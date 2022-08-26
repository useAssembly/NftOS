import { Center } from "@chakra-ui/react";
import { useAddress, useNFTDrop } from "@thirdweb-dev/react";
import { useState } from "react";

import { PageHead } from "@/common/components/PageHead";
import { WalletConnect } from "@/common/components/WalletConnect";
import { NFT_ADDRESS } from "@/common/configs";

import { MintCard, MintStatus } from "@/modules/MintCard";

const MintPage = () => {
  const [mintStatus, setMintStatus] = useState<MintStatus>("default");

  const nftDropContract = useNFTDrop(NFT_ADDRESS);
  const address = useAddress();

  const claimNFT = async () => {
    setMintStatus("pending");
    return nftDropContract?.claim(1);
  };

  const triggerClaimNft = async () => {
    return await claimNFT()
      .then(() => {
        console.log("success");
        setMintStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setMintStatus("failure");
      });
  };

  return (
    <div>
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <Center height={"calc(100vh - 176px)"} px={{ base: 5, md: 0 }}>
        {address ? (
          <MintCard
            mintStatus={mintStatus}
            setMintStatus={setMintStatus}
            triggerClaimNft={triggerClaimNft}
          />
        ) : (
          <WalletConnect />
        )}
      </Center>
    </div>
  );
};

export default MintPage;
