import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Starships = ({ data }) => {
  const [showList, setShowList] = useState(false);
  const handleClick = (event) => {
    setShowList((current) => !current);
  };

  return (
    <>
      <Container className="container">
        <Button onClick={handleClick} className="btn">
          <p class="hover-underline-animation">Starships</p>
        </Button>
        {showList && (
          <Wrapper className="wrapper">
            <ul className="list">
              {data.map((starships, i) => {
                return (
                  <li key={i}>
                    {starships.name} - {starships.manufacturer}.
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
  width: 60vh;
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
  margin: 40px;
`;

export default Starships;
