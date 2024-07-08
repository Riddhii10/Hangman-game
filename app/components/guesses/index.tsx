// import Letter from "./letter";

// export default function Guesses({
//   wrong,
//   correct,
//   select,
//   gameOver,
// }: {
//   wrong: Set<string>,
//   correct: Set<string>,
//   select: (letter: string) => void,
//   gameOver: boolean,
// }) {
//   const chooseLetter = (event: React.MouseEvent<HTMLButtonElement>) => {
//     if (gameOver) {
//       return;
//     }
//     select(event.currentTarget.textContent!);
//   }
//   const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return (
//     <div className="grid grid-cols-9">
//       {letters.map((letter, index) => 
//         <Letter key={index} chosen={wrong.has(letter) || correct.has(letter)} onClick={chooseLetter} letter={letter} wrong={wrong.has(letter)} gameOver={gameOver} />
//       )}
//     </div>
//   );
// }

import Letter from "./letter";

export default function Guesses({
  wrong,
  correct,
  select,
  gameOver,
}: {
  wrong: Set<string>,
  correct: Set<string>,
  select: (letter: string) => void,
  gameOver: boolean,
}) {
  const chooseLetter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) {
      return;
    }
    select(event.currentTarget.textContent!);
  };

  const rows = [
    'qwertyuiop'.split(''),
    'asdfghjkl'.split(''),
    'zxcvbnm'.split('')
  ];

  return (
    <div className="flex flex-col space-y-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-3">
          {row.map((letter, index) => (
            <Letter
              key={index}
              chosen={wrong.has(letter) || correct.has(letter)}
              onClick={chooseLetter}
              letter={letter}
              wrong={wrong.has(letter)}
              gameOver={gameOver}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
