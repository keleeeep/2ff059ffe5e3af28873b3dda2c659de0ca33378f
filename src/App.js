import React from 'react';
import './App.css';
import Header from "./components/headers/Header";
import Date from "./components/dates/Date";
import Cards from "./components/cards/Card";
import Buttons from "./components/buttons/Buttons";


function App() {
  return (
      <React.Fragment>
          <Header />
          <Date />
          <div className="container">
              <Buttons />
              <Cards />
              <Cards />
              <Cards />
          </div>
      </React.Fragment>
  );
}


export default App;
