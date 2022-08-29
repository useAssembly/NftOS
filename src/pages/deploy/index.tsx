import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { CreateNFTCard } from "@/modules/CreateNFTCard";

const DeployPage = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Deploy page description"
        name="Deploy"
      />
      <Heading px={{ base: "20px", lg: "148px" }} size="2xl">
        Step 1
      </Heading>
      <Center my={4} px={4}>
        <CreateNFTCard />
      </Center>
    </div>
  );
};

export default DeployPage;
