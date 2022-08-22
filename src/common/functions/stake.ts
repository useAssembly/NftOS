import { BigNumber } from "ethers";

export const loadStakedNfts = async (
  stakingContract,
  nftDropContract,
  setStakedNfts,
  walletAddress
) => {
  const stakedTokens = await stakingContract?.call(
    "getStakedTokens",
    walletAddress
  );

  // For each staked token, fetch it from the sdk
  const stakedNfts = await Promise.all(
    stakedTokens?.map(
      async (stakedToken: { stalker: string; tokenId: BigNumber }) =>
        await nftDropContract?.get(stakedToken.tokenId)
    )
  );

  setStakedNfts(stakedNfts);
};
