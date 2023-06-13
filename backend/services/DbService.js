import pg from "pg";
import DB_CONFIG from "../config/db.config.js";

const db = new pg.Client(DB_CONFIG);

db.connect();

export default db
