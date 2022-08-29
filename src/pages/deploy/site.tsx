import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { DeployedSiteCard } from "@/modules/DeployedSiteCard";

const DeploySitePage = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Deploy site page description"
        name="Deployed Site"
      />
      <Heading px={{ base: "20px", lg: "148px" }} size="2xl">
        Step 3
      </Heading>
      <Center my={4} px={4}>
        <DeployedSiteCard />
      </Center>
    </div>
  );
};

export default DeploySitePage;
