import { getLanguages } from "../services/languages";
import { useState } from "react";

const languages = getLanguages();
const alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log(languages);
export default function Assembly() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  function wordToLetters(currentWord) {
    return [...currentWord.toUpperCase()];
  }

  function handleGuessLetter(letter) {
    setGuessedLetters((prevGuessedLetters) =>
      prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter]
    );
    console.log(guessedLetters);
  }

  return (
    <>
      <div className="container-languages ">
        {languages.map((language) => {
          const styles = {
            backgroundColor: language.background,
            color: language.text_color,
          };
          return (
            <span className="chip" style={styles} key={language.name}>
              {language.name}
            </span>
          );
        })}
      </div>
      <div className="letters">
        {wordToLetters(currentWord).map((letter, index) => {
          const styles = {
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "40px",
            textAlign: "center",
            borderBottom: "3px solid gray",
          };
          return (
            <span className="chip" style={styles} key={index}>
              {letter}
            </span>
          );
        })}

        <div className="alphabet">
          {wordToLetters(alphabet).map((letter, index) => {
            const styles = {
              backgroundColor: "orange",
              color: "black",
              height: "30px",
              width: "30px",
              textAlign: "center",
            };
            return (
              <button
                className="letter"
                style={styles}
                key={index}
                onClick={() => handleGuessLetter(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
