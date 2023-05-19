import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Characters from "./components/Character";
import { data } from "./mocks/handlers";

const App = () => {
  const [data, setData] = useState("");
  const [results, setResults] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const search = () => {
    axios.get(`https://swapi.dev/api/people/`)
      .then((data) => {setResults(data.data)
     // console.log('axios', data.data)
      })
      .catch((err) => console.error(err));

    //setResults(res);
    //console.log(results);
  };
  console.log(results);

  useEffect(() => {
    console.log('start');
    search();
    console.log('end');
  }, []);

  return (
    <div className="app">
      <h1>React Wars</h1>
     <Characters char={results}/>
      
  
        
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
