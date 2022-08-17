import { Button } from "@chakra-ui/react";
import { useMetamask } from "@thirdweb-dev/react";

export const WalletConnect = () => {
  const connectWithMetamask = useMetamask();

  return <Button onClick={connectWithMetamask}>Connect Wallet</Button>;
};
