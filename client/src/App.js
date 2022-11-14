import React, { useState, useEffect } from "react";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";
import Search from "./Components/Search";
import "./App.css";
import image from "./Assets/starBG.jpg";
import logo from "./Assets/darth.png";
import ship1 from "./Assets/ship1.png";
import ship2 from "./Assets/ship2.png";
import styled from "styled-components";
import { GiSpaceship } from "react-icons/gi";

const App = () => {
  return (
    <>
      <Wrapper className="main" style={{ backgroundImage: `url(${image})` }}>
        <a
          target="_blank"
          href="https://www.flighthub.com/?campaign=24&adgroupid=120784443742&rcid=&dc=&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEGshpOlalayqG13n8oaXGgAGI1RZkFwKCB5oY8feVfCDfGJJR_EEH0aAt2AEALw_wcB"
        >
          <img className="darth" src={logo} />
        </a>
        <div>
          <People />
          <Starships />
          <Planets />
        </div>
        <img className="ship1" src={ship1} />
        <img className="ship2" src={ship2} />
        <Search />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: no-repeat center/cover;
  background-color: grey;
  height: 100vh;
  width: 100%;
`;

export default App;
