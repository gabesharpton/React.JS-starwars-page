import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import People from "./components/People"
import Planets from "./components/Planets"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {


const [people, setPeople] = useState([]);
const [planets, setPlanets] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchPeople() {
    let res = await fetch('https://swapi.co/api/people/?format=json');
    let data = await res.json();
    setPeople(data.results);
  }
  async function fetchPlanets() {
    let res = await fetch('https://swapi.co/api/planets/?format=json');
    let data = await res.json();
    setPlanets(data.results);
  }
  fetchPeople();
  fetchPlanets();
}, []);
console.log("data", people);
console.log("data", planets);




  return (
    
    <div className="App">
      <Router>

        
        <Navbar />
        <Container>
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router exact path="/people">
              <People />
            </Router>
            <Router>
              <Planets exact path="/planets"/>
            </Router>
          </Switch>
        </Container>
      
      </Router>
      
    </div>
  );
}





export default App;









// ------------



// getStarship = (idx) => {
//   return this.state.starships[idx];
// }
// getPeople = (idx) => {
//   return this.state.people[idx];
// }
// getPeople2 = (idx) => {
//   return this.state.people[idx];
// }

// async componentDidMount() {
//   const starships = await getAllStarships();
//   this.setState({ starships: starships.results });
//   const people = await getAllPeople();
//   this.setState({ people: people.results });
//   const people2 = await getAllPeople2();
//   this.setState({ people2: people2.results });

// }

// async componentDidMount() {
//   const people = await getAllPeople();
//   this.setState({ people: people.results });
// }