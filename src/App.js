import React, { useEffect } from 'react';
import './App.css';
import Piano from './components/Piano';
import styled from 'styled-components';
import axios from 'axios';

// const StyleForm = styled.form`
//   color: white;
//   margin-top: 5px;
//   margin-left: 15px;
// `

const PageTitle = styled.h1`
  color: white;
`

function App() {

  useEffect(() => {
    getMeows();
  }, []);

  const getMeows = () => {
    axios.get('/meows')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
        <PageTitle>Kitty Keyboard</PageTitle>
        {/* <StyleForm>
          <div>Login:</div>
          <label>Username:
            <input type="text"></input>
          </label>
          <label>Password:
            <input type="text"></input>
          </label>
          <label>
            <input type="submit"></input>
          </label>
        </StyleForm> */}
      <header className="App-header">
        <Piano />
      </header>
    </div>
  );
}

export default App;
