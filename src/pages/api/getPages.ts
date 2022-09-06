import { dbPool } from "@/common/functions/database";

const handler = async (req, res) => {
  const query = "SELECT * FROM pages WHERE user_id = $1";

  const { address } = req.body;

  const client = await dbPool.connect();
  try {
    const result = await client.query(query, [address]);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).send(err.stack);
  } finally {
    client.release();
  }
};

export default handler;
