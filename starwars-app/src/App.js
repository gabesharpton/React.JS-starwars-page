import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { getAllStarships, getAllPeople } from './services/sw-api';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';

class App extends Component {
state = {
  starships: [],
  people: []
};

getStarship = (idx) => {
  return this.state.starships[idx];
}
getPeople = (idx) => {
  return this.state.people[idx];
}

async componentDidMount() {
  const starships = await getAllStarships();
  this.setState({ starships: starships.results });
}
async componentDidMount() {
  const people = await getAllPeople();
  this.setState({ people: people.results });
}

render() {
  return (
    
    <div className="App">
      <header className="App-header">STAR WARS STARSHIPS</header>
      <Switch>
        <Route exact path='/' render={() => 
          <section>
            {this.state.starships.map((starship, idx) => 
              <Link
                to={`/starships/${idx}`}
                key={starship.name}
              >
                {starship.name}
              </Link>
            )}
          </section>
        }/>
        <Route path='/starships/:idx' render={(props) => 
          <StarshipPage
            {...props}
            getStarship={this.getStarship}
          />
        }/>
      </Switch>
      <Switch>
        <Route exact path='/' render={() => 
          <section>
            {this.state.people.map((people, idx) => 
              <Link
                to={`/people/${idx}`}
                key={people.name}
              >
                {people.name}
              </Link>
            )}
          </section>
        }/>
        <Route path='/people/:idx' render={(props) => 
          <PeoplePage
            {...props}
            getPeople={this.getPeople}
          />
        }/>
      </Switch>
    </div>
  );
}

}



export default App;
