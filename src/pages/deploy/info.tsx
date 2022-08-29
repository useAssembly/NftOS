import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { CreateNFTCard } from "@/modules/CreateNFTCard";
import { DeploySiteForm } from "@/modules/DeploySiteForm";

const DeployInfo = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Deploy info page description"
        name="Deploy Info"
      />
      <Heading px={{ base: "20px", lg: "148px" }} size="2xl">
        Step 2
      </Heading>
      <Center my={4} px={4}>
        <DeploySiteForm />
      </Center>
    </div>
  );
};

export default DeployInfo;
