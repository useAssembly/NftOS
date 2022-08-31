import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { DeployProgressCard } from "@/modules/DeployProgressCard";

const DeployProgressPage = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Deploy progress page description"
        name="Deployed Progress"
      />
      <Heading px={{ base: "20px", lg: "148px" }} size="2xl">
        Step 3
      </Heading>
      <Center my={4} px={4}>
        <DeployProgressCard />
      </Center>
    </div>
  );
};

export default DeployProgressPage;
