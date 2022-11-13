import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Planets = ({ data }) => {
  const [planets, setPlanets] = useState([]);
  const [showList, setShowList] = useState(false);
  const handleClick = (event) => {
    setShowList((current) => !current);
  };

  useEffect(() => {
    fetch("http://localhost:8000/planets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlanets(data.results);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container>
        <Button onClick={handleClick} className="btn">
          <p className="hover-underline-animation">Planets</p>
        </Button>
        {showList && (
          <Wrapper className="wrapper">
            <ul className="list">
              {planets.map((planets, i) => {
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
