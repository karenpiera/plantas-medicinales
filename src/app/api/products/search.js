import { conn } from "../../../libs/mysql";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { name } = req.query;

    try {
      const result = await conn.query(
        "SELECT * FROM product WHERE name LIKE ?",
        [`%${name}%`]
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).end(); // Método no permitido
  }
}
