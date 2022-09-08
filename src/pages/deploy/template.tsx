import { Center, Heading } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { ChooseTemplate } from "@/modules/ChooseTemplate/ChooseTemplate";

const DeployInfo = () => {
  return (
    <div>
      <PageHead
        append={false}
        description="Choose Template page description"
        name="Choose Template"
      />
      <Heading px={{ base: "20px", lg: "148px" }} size="2xl">
        Step 2
      </Heading>
      <Center my={4} px={4}>
        <ChooseTemplate />
      </Center>
    </div>
  );
};

export default DeployInfo;
