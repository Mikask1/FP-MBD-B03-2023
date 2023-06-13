import db from "./services/DbService.js";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
	const query = `SELECT * FROM public.kategori;`;
	try {
		const result = await db.query(query);

		res.json(result.rows);
	} catch (error) {
		res.json(error);
	}
});

app.listen(3000, () => {
	console.log(`Server listening on port ${3000}`);
});
