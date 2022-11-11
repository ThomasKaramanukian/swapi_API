import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Planets = ({ data }) => {
  const [showList, setShowList] = useState(false);
  const handleClick = (event) => {
    setShowList((current) => !current);
  };

  return (
    <>
      <Container>
        <Button onClick={handleClick} className="btn">
          <p className="hover-underline-animation">Planets</p>
        </Button>
        {showList && (
          <Wrapper className="wrapper">
            <ul className="list">
              {data.map((planets, i) => {
                return (
                  <li key={i}>
                    {planets.name} - Population: {planets.population}
                  </li>
                );
              })}
            </ul>
          </Wrapper>
        )}
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 20px;
  height: 50vh;
  width: 40vh;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  height: 5vh;
  width: 25vh;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Planets;
