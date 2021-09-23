import React from 'react';
import { Card } from 'react-bootstrap';
import './Pokecard.css';

const Pokecard = ({ name, type, base_experience, id }) => {
  return (
    <Card className="Pokecard m-3 d-flex flex-column align-items-center">
      <Card.Title className="text-center fw-bold text-primary pt-2 mt-1">
        {name}
      </Card.Title>
      <Card.Body>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="img-fluid"
        />
        <p className="text-center">Type: {type}</p>
        <p className="text-center">EXP: {base_experience}</p>
      </Card.Body>
    </Card>
  );
};

export default Pokecard;
