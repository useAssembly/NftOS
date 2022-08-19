import { Button, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

import { Card, Content, Footer, Header } from "@/common/components/Card";
import { MintIcon, TickIcon } from "@/common/components/CustomIcon";

const info = {
  failure: {
    content: (
      <>
        Something went wrong. <br /> Please try again!
      </>
    ),
    heading: "An error has occured",
    icon: <MintIcon />,
    buttonLabel: "Try Again",
  },
  success: {
    content: "You now own $AFP. Consider staking it!",
    heading: "Success",
    icon: <TickIcon />,
    buttonLabel: "+ Stake",
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
    buttonLabel: "Mint ->",
  },
  pending: {
    content: (
      <>
        You don’t currently own an Airfoil pass. <br /> Please mint one with the
        button below.
      </>
    ),
    heading: "Mint an Airfoil pass",
    icon: <MintIcon />,
    buttonLabel: "Minting...",
  },
};

export type MintStatus = "success" | "failure" | "pending" | "default";

interface Props {
  mintStatus: MintStatus;
  setMintStatus: (status: MintStatus) => void;
  triggerClaimNft: () => void;
}

export const MintCard: FunctionComponent<Props> = ({
  mintStatus,
  setMintStatus,
  triggerClaimNft,
}) => {
  const handleMinting = async () => {
    setMintStatus("pending");
    await triggerClaimNft(); // simulate API fetch
    setMintStatus("success");
  };

  const status = mintStatus;
  return (
    <Card minWidth={476}>
      <Header>{info[status].icon}</Header>
      <Content>
        <Heading pb={1}>{info[status].heading}</Heading>
        <Text color="gray.700" size="sm">
          {info[status].content}
        </Text>
      </Content>
      <Footer>
        <Button
          isDisabled={status === "pending"}
          width="full"
          onClick={handleMinting}
        >
          {info[status].buttonLabel}
        </Button>
      </Footer>
    </Card>
  );
};
