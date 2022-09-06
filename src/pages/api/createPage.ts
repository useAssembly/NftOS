import { NextApiRequest } from "next";

import { dbPool } from "@/common/functions/database";

const handler = async (req: NextApiRequest, res) => {
  const query =
    "INSERT INTO pages(title, user_id, status, nft_contract_adress, background_color) VALUES($1, $2, $3, $4, $5)";

  const { nftContractAddress, background, siteName, address } = req.body;

  const values = [siteName, address, "pending", nftContractAddress, background];

  dbPool.query(query, values, (err, response) => {
    if (err) {
      console.log(err.stack);
      return res.status(500).send(err);
    } else {
      return res.status(200).json({ status: "success" });
    }
  });
};

export default handler;
