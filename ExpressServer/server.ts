import express from "express";
import "express-async-errors";
import morgan from "morgan";

const TODO: string = "start writing your Express API server here :)";
const app = express();
const port = 3000;

app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  res.json(planets.find((p) => p.id === Number(id)));
});

app.listen(port, () => {
  console.log(`the server running http://localhost/${port}`);
});

console.log(TODO);
