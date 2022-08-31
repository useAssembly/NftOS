import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { DeployedSiteCard } from "@/modules/DeployedSiteCard";

const DeploySitePage = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Deploy site detail page description"
        name="Deployed Site Detail"
      />
      <Center my={4} px={4}>
        <DeployedSiteCard />
      </Center>
    </div>
  );
};

export default DeploySitePage;
