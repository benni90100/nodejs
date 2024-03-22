import express, { json } from "express";
import * as dotenv from "dotenv"
dotenv.config()
import { login } from "./controllers/autentication.mjs";
import "./passport.mjs"
const app = express();
// Middleware
app.use(json());

//route
//login
app.post("/api/users/login", login);

// Avvio del server
const {PORT} = process.env
app.listen(PORT, () => {
  console.log(
    `Il server è in esecuzione sulla porta http://localhost:${PORT}.`
  );
});
