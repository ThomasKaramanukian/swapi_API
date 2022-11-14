import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [person, setPerson] = useState(null);
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);

  const searchPerson = () => {
    fetch(`http://localhost:8000/search?value=${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPerson(data.results[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {person && (
        <Wrapper className="listSearch">
          <p className="pList">
            <span className="ctg">Name:</span> {person.name}
          </p>
          <p className="pList">
            <span className="ctg">Gender:</span> {person.gender}
          </p>
          <p className="pList">
            <span className="ctg">Height:</span> {person.height} cm
          </p>
          <p className="pList">
            <span className="ctg">DOB:</span> {person.birth_year}
          </p>
        </Wrapper>
      )}

      <div>
        <input
          className="input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div>
        <button class="glow-on-hover" type="button" onClick={searchPerson}>
          Search
        </button>
      </div>
    </>
  );
};

const Wrapper = styled.div``;

export default Search;
