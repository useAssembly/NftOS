import { BigNumber, ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { useEffect, useState } from "react";

export const useLoadClaimableRewards = ({ address, contract }) => {
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>(
    BigNumber.from(0)
  );
  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const cr = await contract?.call("availableRewards", address);
      setClaimableRewards(cr);
    }

    loadClaimableRewards();
  }, [address, contract]);
  return claimableRewards;
};
