import React, { useState, useEffect } from "react";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";
import Search from "./Components/Search";
import "./App.css";
import image from "./Assets/starBG.jpg";
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
          <GiSpaceship className="icon" size={70} />
        </a>
        <div>
          <People />
          <Starships />
          <Planets />
        </div>

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
