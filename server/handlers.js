const nodeFetch = require("node-fetch");

const getPeople = async (req, res) => {
  try {
    const resFetch = await fetch("https://swapi.dev/api/people");
    const data = await resFetch.json();
    res.json(data);
  } catch (e) {
    console.log("Error!", e);
  }
};

const getPlanets = async (req, res) => {
  try {
    const resFetch = await fetch("https://swapi.dev/api/planets");
    const data = await resFetch.json();
    res.json(data);
  } catch (e) {
    console.log("Error!", e);
  }
};

const getStarships = async (req, res) => {
  try {
    const resFetch = await fetch("https://swapi.dev/api/starships");
    const data = await resFetch.json();
    res.json(data);
  } catch (e) {
    console.log("Error!", e);
  }
};

const searchPerson = async (req, res) => {
  console.log(req.query.value);
  try {
    const resFetch = await fetch(
      `https://swapi.dev/api/people/?search=${req.query.value}`
    );
    const data = await resFetch.json();
    console.log(data);
    res.json(data);
  } catch (e) {
    console.log("Error!", e);
  }
};

module.exports = {
  getPeople,
  getPlanets,
  getStarships,
  searchPerson,
};
