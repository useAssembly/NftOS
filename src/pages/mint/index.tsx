import { Center } from "@chakra-ui/react";
import { useState } from "react";

import { PageHead } from "@/common/components/PageHead";

import { MintCard, MintStatus } from "@/modules/MintCard";

const MintPage = () => {
  const [mintStatus, setMintStatus] = useState<MintStatus>("default");

  return (
    <div>
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <Center height={"calc(100vh - 176px)"}>
        <MintCard mintStatus={mintStatus} setMintStatus={setMintStatus} />
      </Center>
    </div>
  );
};

export default MintPage;
