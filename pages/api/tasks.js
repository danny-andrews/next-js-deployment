import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL);

export default async (req, res) => {
  if (req.method === "GET") {
    const result = await sql`SELECT * FROM tasks`;
    res.status(200).json(result);
  }
};
