import React, { useState } from "react";
import "./App.css";

const App = ({ data }) => {
  const people = data.reduce(
    (obj, item) => {
      if (item.Sex && item.Survived === "0") {
        obj[item.Sex] += 1;
      }
      if (item.Sex && item.Survived === "1") {
        obj.survived += 1;
      }
      if (item.Sex) {
        obj.totalPeople += 1;
      }
      return obj;
    },
    { female: 0, male: 0, survived: 0, totalPeople: 0 }
  );

  const analyseData = () => {};

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Titanic Data information summary</p>
      </header>
      <div className='BtnsFlex'>
        <button onClick={() => analyseData()}>All ages</button>
        <button onClick={() => analyseData({ from: 1, to: 9 })}>1 - 9</button>
        <button onClick={() => analyseData({ from: 10, to: 19 })}>
          10 - 19
        </button>
        <button onClick={() => analyseData({ from: 20, to: 34 })}>
          20 - 34
        </button>
        <button onClick={() => analyseData({ from: 35, to: 49 })}>
          35 - 49
        </button>
        <button onClick={() => analyseData({ from: 50, to: 59 })}>
          50 - 59
        </button>
        <button onClick={() => analyseData({ from: 60 })}>60+</button>
      </div>
      <div className='WrapperInfo'>
        <div>Total People: {people.totalPeople}</div>
        <div>Total Female died: {people.female}</div>
        <div>Total Male died: {people.male}</div>
        <div>Total people survived: {people.survived}</div>
      </div>
    </div>
  );
};

export default App;
