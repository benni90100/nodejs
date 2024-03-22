import pgPromise from "pg-promise";
import * as dotenv from "dotenv";
dotenv.config();
const db = pgPromise()("postgres://postgres:270290@localhost:5432/exercise");

const setupDb = async () => {
  try {
    await db.none(`
      DROP TABLE IF EXISTS users;
      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255),
          password VARCHAR(255),
          token TEXT
    )`);
    await db.none(
      `INSERT INTO users (username, password) VALUES ('admin', 'admin')`
    );

    console.log("Database setup completed.");
  } catch (error) {
    console.error("Error setting up database:", error.message);
  }
};

setupDb();

export { db };
