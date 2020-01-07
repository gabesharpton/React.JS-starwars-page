import React from 'react';
import { Link } from 'react-router-dom';
import './PeoplePage.css';

const PeoplePage = (props) => {
  
  const people = props.getPeople(props.match.params.idx);
  const people2 = props.getPeople2(props.match.params.idx);
  
  return (
    <div className='PeoplePage'>
      {people ?
        <div className='PeoplePage-people'>
          
          <span>NAME:</span>
          <span>{people.name}</span>
          <span>GENDER:</span>
          <span>{people.gender}</span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
      {people2 ?
        <div className='PeoplePage-people'>
          
          <span>NAME:</span>
          <span>{people2.name}</span>
          <span>GENDER:</span>
          <span>{people2.gender}</span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default PeoplePage;