import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import People from "./components/People"
import Planets from "./components/Planets"
import Films from './components/Films'


import { BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {


const [people, setPeople] = useState([]);
const [planets, setPlanets] = useState([]);
const [films, setFilms] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchPeople() {
    let res = await fetch('https://swapi.co/api/people/?format=json');
    let data = await res.json();
    setPeople(data.results);
    setLoading(false);
  }
  async function fetchPlanets() {
    let res = await fetch('https://swapi.co/api/planets/?format=json');
    let data = await res.json();
    setPlanets(data.results);
    setLoading(false);
  }
  async function fetchFilms() {
    let res = await fetch('https://swapi.co/api/films/?format=json');
    let data = await res.json();
    setFilms(data.results);
    setLoading(false);
  }
  fetchPeople();
  fetchPlanets();
  fetchFilms();
}, []);





  return (
    
    <div className="App">
      <Router>

        
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router exact path="/people">
              <People data={people} />
            </Router>
            <Router exact path="/planets">
              <Planets data={planets}/>
            </Router>
            <Router exact path="/films">
              <Films data={films}/>
            </Router>
          </Switch>
          )}
          
        </Container>
      
      </Router>
      
    </div>
  );
}





export default App;

