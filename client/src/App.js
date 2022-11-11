import React, { useState, useEffect } from "react";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";
import "./App.css";
import image from "./Assets/casey-horner-stars.jpg";
import styled from "styled-components";

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }
    async function fetchStarships() {
      let res = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await res.json();
      setStarships(data.results);
    }

    fetchPeople();
    fetchPlanets();
    fetchStarships();
  }, []);

  return (
    <>
      <Wrapper className="main" style={{ backgroundImage: `url(${image})` }}>
        <People data={people} />
        <Starships data={starships} />
        <Planets data={planets} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

export default App;
