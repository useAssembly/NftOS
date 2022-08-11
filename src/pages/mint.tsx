import { Heading, Text } from "@chakra-ui/react";

import { Card, Content, Header } from "@/common/components/Card";
import { PageHead } from "@/common/components/PageHead";
import { MintCard } from "@/common/components/MintCard";
import { MintIcon } from "@/common/components/CustomIcon";

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <section className="grid place-content-center h-full">
        <MintCard status="failure" />
      </section>
    </div>
  );
}
