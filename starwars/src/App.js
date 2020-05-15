import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import styled from 'styled-components'
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setData(res.data.results)
      })
      .catch((err) => {
        console.log('Error with API get request', err)
      })
  }, [])

  return (
    <div className="App">
      <TitleContainer>
        <h1 className="Header">
          <i className="fas fa-space-shuttle"></i>
          {' '}The Rick and Morty Show{' '}
          <i className="fas fa-user-astronaut"></i>
        </h1>
      </TitleContainer>
      <CharacterCast>{
        data.map((character, index) => {
          return (
            <Character key={index} character={character} />
          )
        })
      }</CharacterCast>
    </div>
  );
}

const CharacterCast = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content:center;
  width: 80%;
  margin: 1% auto 3% auto;
  list-style-type: none;
`

const TitleContainer = styled.header`
  text-align: center;
  padding: 0.5% 0;
  background:cornsilk;

  h1 i {
        color: lightcoral;
    }
`

export default App;
