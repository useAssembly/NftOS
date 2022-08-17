import { useAddress, useNFTDrop } from "@thirdweb-dev/react";
import { useState } from "react";

import { PageHead } from "@/common/components/PageHead";
import { WalletConnect } from "@/common/components/WalletConnect";

import { MintCard, MintStatus } from "@/modules/MintCard";

const MintPage = () => {
  const [mintStatus, setMintStatus] = useState<MintStatus>("default");

  const nftDropContract = useNFTDrop(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
  );
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
      <section className="flex place-content-center h-full">
        {address ? (
          <MintCard
            mintStatus={mintStatus}
            setMintStatus={setMintStatus}
            triggerClaimNft={triggerClaimNft}
          />
        ) : (
          <WalletConnect />
        )}
      </section>
    </div>
  );
};

export default MintPage;
