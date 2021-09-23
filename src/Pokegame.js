import { p1Deck, p2Deck } from './pokemon';
import Pokedex from './Pokedex';

const Pokegame = () => {
  const p1Exp = p1Deck.reduce((acc, i) => {
    return acc + i.base_experience;
  }, 0);
  const p2Exp = p2Deck.reduce((acc, i) => {
    return acc + i.base_experience;
  }, 0);
  let winnerStyle;
  if (p1Exp > p2Exp) {
    winnerStyle = 'text-center text-primary';
  } else {
    winnerStyle = 'text-center text-danger';
  }
  return (
    <div className="Pokegame">
      <div className="container pb-5 mb-5">
        <h1 className="text-center text-primary">Player 1</h1>
        <Pokedex defaultProps={p1Deck} />
        <h5 className="text-center">Total EXP: {p1Exp}</h5>
      </div>
      <div className="container">
        <h5 className={winnerStyle}>
          {p1Exp > p2Exp ? 'Player 1 Wins!' : 'Player 2 Wins!'}
        </h5>
      </div>
      <div className="container pt-5 mt-5">
        <h5 className="text-center">Total EXP: {p2Exp}</h5>
        <Pokedex defaultProps={p2Deck} />
        <h1 className="text-center text-danger">Player 2</h1>
      </div>
    </div>
  );
};

export default Pokegame;
