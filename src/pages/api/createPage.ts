import { NextApiRequest } from "next";

import { dbPool } from "@/common/functions/database";

const handler = async (req: NextApiRequest, res) => {
  const { nftContractAddress, background, siteName, address } = req.body;

  const client = await dbPool.connect();
  try {
    await client.query(
      "INSERT INTO pages(title, user_id, status, nft_contract_adress, background_color) VALUES($1, $2, $3, $4, $5)",
      [siteName, address, "pending", nftContractAddress, background]
    );
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).send(err.stack);
  } finally {
    client.release();
  }
};

export default handler;
