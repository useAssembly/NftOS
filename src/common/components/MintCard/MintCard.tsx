import { Heading, Text } from "@chakra-ui/react";

import { Card, Content, Header } from "../Card";
import { MintIcon, TickIcon } from "../CustomIcon";

interface Props {
  status: "success" | "failure" | "pending";
}

export const MintCard = ({ status }: Props) => {
  const info = {
    failure: {
      content: (
        <>
          You don’t currently own an Airfoil pass. <br /> Please mint one with
          the button below.
        </>
      ),
      heading: "Mint an Airfoil pass",
      icon: <MintIcon />,
    },
    success: {
      content: "You now own $AFP. Consider staking it!",
      heading: "Success",
      icon: <TickIcon />,
    },
    pending: {
      content: (
        <>
          You don’t currently own an Airfoil pass. <br /> Please mint one with
          the button below.
        </>
      ),
      heading: "Mint an Airfoil pass",
      icon: <MintIcon />,
    },
  };

  return (
    <Card>
      <Header>{info[status].icon}</Header>
      <Content>
        <Heading pb={1}>{info[status].heading}</Heading>
        <Text color="gray.700" size="sm">
          {info[status].content}
        </Text>
      </Content>
    </Card>
  );
};
