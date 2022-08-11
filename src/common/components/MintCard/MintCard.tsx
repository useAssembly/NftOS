import { Heading, Text } from "@chakra-ui/react";

import { Card, Content, Header } from "../Card";
import { MintIcon, TickIcon } from "../CustomIcon";

const info = {
  failure: {
    content: (
      <>
        Something went wrong. <br /> Please try again!
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
  default: {
    content: (
      <>
        You don’t currently own an Airfoil pass. <br /> Please mint one with the
        button below.
      </>
    ),
    heading: "Mint an Airfoil pass",
    icon: <MintIcon />,
  },
};

export type MintStatus = "success" | "failure" | "pending" | "default";

interface Props {
  mintStatus: MintStatus;
}

export const MintCard = ({ mintStatus }: Props) => {
  const status =
    mintStatus === "pending" || mintStatus === "default"
      ? "default"
      : mintStatus;
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
