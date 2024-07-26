
"use client";
import { useState, useEffect, useCallback } from "react";
import Hangman from "./components/hangman";
import Word from "./components/word";
import Guesses from "./components/guesses";
import NewWord from "./components/newWord";
import Status from "./components/status";
import Hint from "./components/Hint";
import { chooseRandomWord, words } from "./data/words";

export default function Home() {
  const [wordData, setWordData] = useState(chooseRandomWord());
  const [lostSize, setLostSize] = useState(6);
  const [wrong, setWrong] = useState(new Set<string>());
  const [letters, setLetters] = useState(new Set<string>(wordData.word.split("")));
  const [correct, setCorrect] = useState(new Set<string>());
  const [gameOver, setGameOver] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [newWordCount, setNewWordCount] = useState(0); // Track new word button clicks

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Function to handle a new word
  const newWord = useCallback(() => {
    if (newWordCount < 3) { // Check if new word button can be clicked less than 3 times
      const newWordData = chooseRandomWord();
      setWordData(newWordData);
      setWrong(new Set<string>());
      setCorrect(new Set<string>());
      setLetters(new Set<string>(newWordData.word.split("")));
      setGameOver(false);
      setNewWordCount(prevCount => prevCount + 1); // Update the count correctly
    }
  }, [newWordCount]);

  // Function to reset the game state
  const startNewGame = useCallback(() => {
    const newWordData = chooseRandomWord();
    setWordData(newWordData);
    setWrong(new Set<string>());
    setCorrect(new Set<string>());
    setLetters(new Set<string>(newWordData.word.split("")));
    setGameOver(false);
    setNewWordCount(0); // Reset new word count for the new game
  }, []);

  const selectLetter = useCallback(
    (letter: string) => {
      if (letters.has(letter)) {
        setCorrect(new Set(correct).add(letter));
        if (correct.size + 1 >= letters.size) {
          setGameOver(true);
          setWins(wins + 1);
        }
      } else {
        setWrong(new Set(wrong).add(letter));
        if (wrong.size + 1 >= lostSize) {
          setGameOver(true);
          setLosses(losses + 1);
        }
      }
    },
    [letters, correct, wrong, lostSize, wins, losses]
  );

  const handleKeyPress = useCallback(
    (event: any) => {
      if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        selectLetter(event.key.toLowerCase());
      }
    },
    [selectLetter]
  );

  const handleKeyPressUp = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        newWord();
      }
    },
    [newWord]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);
    document.addEventListener("keyup", handleKeyPressUp);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
      document.removeEventListener("keyup", handleKeyPressUp);
    };
  }, [handleKeyPress, handleKeyPressUp]);

  return hydrated ? (
    <div className="flex justify-center">
      <div className="bg-yellow-500 w-3/5 rounded-lg shadow-lg flex flex-col items-center h-3/5">
        <h1 className="mt-5 text-3xl font-extrabold flex text-center">
          Hangman
        </h1>
        <div className="flex mt-5">
          <div className="mt-5">
            <Hangman
              word={wordData.word}
              wrong={wrong}
              gameOver={gameOver}
              lostSize={lostSize}
            />
          </div>

          <div className="flex flex-col items-center ml-5 mt-4">
            <Word word={wordData.word} correct={correct} gameOver={gameOver} />
            <div className="mt-3 ml-16 ">
              <Guesses
                wrong={wrong}
                correct={correct}
                select={selectLetter}
                gameOver={gameOver}
              />
            </div>
          </div>
        </div>
        <div className="text-sm pl-72 mt-2">
          <Hint hint={wordData.hint} />{" "}
        </div>
        <div className="">
          <NewWord newWord={newWord} newWordCount={newWordCount} /> {/* Pass newWordCount to NewWord component */}
        </div>
      </div>

      {gameOver && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center ">
          <Status
            wrong={wrong}
            correct={correct}
            gameOver={gameOver}
            losses={losses}
            wins={wins}
            newWord={startNewGame} // Pass startNewGame to Status component
          />
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
