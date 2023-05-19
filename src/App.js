import React, { useState, useEffect } from "react";
//import axios from 'axios';
import "./App.css";
import Characters from "./components/Character";
import { data } from "./mocks/handlers";

const App = () => {
  const [data, setdata] = useState("");
  const [res, setResults] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const search = () => {
    fetch(`https://swapi.dev/api/people/?search=${data}`)
      .then((res) => res.json())
      .then((data) => setResults(data.setResults))
      .catch((err) => console.error(err));

    setResults(res);
    console.log(res);
  };

  useEffect(() => {
    search();
  }, [data]);

  return (
    <div className="app">
      <h1>React Wars</h1>
      <Characters 
        name={data.name}
        birthDay={data.birthYear}
        homeWorld={data.homeWorld}
      />
    </div>
  );
};

export default App;

//https://swapi.dev/api/people/?search
/*
<SearchForm query={query} setQuery={setQuery} />
  {results.map((result) => (
        <Characters
          keys={result.name}
          name={result.name}
          birthYear={result.birthYear}
          homeWorld={result.homeWorld}
        />
      ))};

*/