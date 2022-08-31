import { NextApiRequest } from "next";

import { dbPool } from "@/common/functions/database";

const handler = async (req: NextApiRequest, response) => {
  const query = "INSERT INTO pages(title, user_id, status) VALUES($1, $2, $3)";

  const values = ["testtyy", "2", "pending"];

  dbPool.query(query, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
      response.status(200).json({ status: "success" });
    }
  });
};

export default handler;
