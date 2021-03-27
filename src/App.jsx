import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './stylesheets/styles.css';
import { useJwt } from 'react-jwt';

const App = () => {

  return (
    <>
      <MainContainer />
    </>
  )
}

export default App;