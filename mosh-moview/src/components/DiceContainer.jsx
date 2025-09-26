import Dice from "./Dice";
import React from 'react';
import Confetti from 'react-confetti';

export default function DiceContainer() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 1; i <= 10; i++) {
      let randomValue = Math.floor(Math.random() * 6) + 1;
      newDice.push({ 'value': randomValue, 'isHeld': false });
    }
    return newDice;
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return !die.isHeld ? { ...die, value: Math.floor(Math.random() * 6) + 1 } : die
    }))
  }
  function holdDice(index) {
    setDice(oldDice => oldDice.map((die, i) => {
      return i === index ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  const isWon =false;
  return (
    <div className="dice-container">

      {dice.map((die, index) => (
        <Dice
          key={index}
          value={die.value}
          isHeld={die.isHeld}
          hold={() => holdDice(index)}
        />
      ))}
      <button onClick={rollDice}>
        {isWon ? 'New Game' : 'Roll Dice'}
      </button>
    </div>
  );
}
