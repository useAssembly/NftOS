import { useState } from "react";

import { MintCard, MintStatus } from "@/common/components/MintCard";
import { PageHead } from "@/common/components/PageHead";

export default function Home() {
  const [mintStatus, setMintStatus] = useState<MintStatus>("default");
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <section className="grid place-content-center h-full">
        <MintCard mintStatus={mintStatus} />
      </section>
    </div>
  );
}
