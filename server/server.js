const express = require("express");
const cors = require("cors");
const PORT = 8000;
const app = express();

const {
  getPeople,
  getPlanets,
  getStarships,
  searchPerson,
} = require("./handlers");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Hello!" });
});

app.get("/starships", getStarships);
app.get("/people", getPeople);
app.get("/planets", getPlanets);
app.get("/search", searchPerson);

app.listen(PORT, () => {
  console.log(`FlightHub listening on port ${PORT}`);
});
