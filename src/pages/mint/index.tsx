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
      <section className="flex place-content-center h-full">
        <MintCard mintStatus={mintStatus} setMintStatus={setMintStatus} />
      </section>
    </div>
  );
};

export default MintPage;
