// export default function Status({
//     wrong,
//     correct,
//     lostSize,
//     gameOver,
//     losses,
//     wins,
//   } : {
//     wrong: Set<string>,
//     correct: Set<string>,
//     lostSize: number,
//     gameOver: boolean,
//     losses: number,
//     wins: number,
//   }) {
//     const difficultyToString = (difficulty: number) => {
//       switch (difficulty) {
//         case 12: return "Easy";
//         case 9: return "Medium";
//         case 6: return "Hard";
//         case 3: return "Extreme";
//         default: return "Unknown";
//       }
//     }
//     const status = gameOver ? (wrong.size >= lostSize ? "You lost!" : "You won!") : "Keep guessing!";
//     return (
//       <div className="flex flex-col my-4">
//         <div className="text-4xl font-bold text-center">{status}</div>
//         <div className="text-sm my-2 text-center">
//           {`Wrong guesses: ${wrong.size}/${lostSize} | Correct guesses: ${correct.size} | Difficulty: ${difficultyToString(lostSize)}`}
//         </div>
//         <div className="text-sm my-2 text-center">
//           {`Wins: ${wins} | Losses: ${losses} | Games: ${wins + losses} | Win rate: ${wins + losses > 0 ? Math.floor(wins / (wins + losses) * 100) : 0}%`}
//         </div>
//       </div>
//     );
//   }
  
// components/status/index.tsx

// export default function Status({
//   wrong,
//   correct,
//   lostSize,
//   gameOver,
//   losses,
//   wins,
// }: {
//   wrong: Set<string>,
//   correct: Set<string>,
//   lostSize: number,
//   gameOver: boolean,
//   losses: number,
//   wins: number,
// }) {
//   const difficultyToString = (difficulty: number) => {
//       switch (difficulty) {
//           case 12: return "Easy";
//           case 9: return "Medium";
//           case 6: return "Hard";
//           case 3: return "Extreme";
//           default: return "Unknown";
//       }
//   }

//   const status = gameOver ? (wrong.size >= lostSize ? "You lost!" : "You won!") : "Keep guessing!";

//   return (
//       <div className="mt-20 p-4 rounded-lg shadow-lg text-white">
//           <div className=" bg-green-500 text-3xl font-bold mb-4 p-6 rounded-full">{status}</div>
//           <div className="text-lg mt-10">
//               <p>Wrong guesses: {wrong.size}/{lostSize}</p>
//               <p>Correct guesses: {correct.size}</p>
//               <p>Difficulty: {difficultyToString(lostSize)}</p>
//           </div>
//           <div className="text-lg mt-2">
//               <p>Wins: {wins}</p>
//               <p>Losses: {losses}</p>
//               <p>Games: {wins + losses}</p>
//               <p>Win rate: {wins + losses > 0 ? Math.floor(wins / (wins + losses) * 100) : 0}%</p>
//           </div>
//       </div>
//   );
// }


// components/status/index.tsx

export default function Status({
  wrong,
  correct,
  lostSize,
  gameOver,
  losses,
  wins,
}: {
  wrong: Set<string>,
  correct: Set<string>,
  lostSize: number,
  gameOver: boolean,
  losses: number,
  wins: number,
}) {
  const difficultyToString = (difficulty: number) => {
    switch (difficulty) {
      case 12:
        return "Easy";
      case 9:
        return "Medium";
      case 6:
        return "Hard";
      case 3:
        return "Extreme";
      default:
        return "Unknown";
    }
  };

  let statusColor = "bg-yellow-500"; // Default color for "Keep guessing!"
  let statusMessage = "Keep guessing!";

  if (gameOver) {
    if (wrong.size >= lostSize) {
      statusColor = "bg-red-500"; // Color for "You lost!"
      statusMessage = "You lost!";
    } else {
      statusColor = "bg-green-500"; // Color for "You won!"
      statusMessage = "You won!";
    }
  }

  return (
    <div className={`mt-20 p-4 rounded-lg shadow-lg text-white `}>
      <div className={`text-3xl font-bold mb-4 p-6 rounded-full ${statusColor}`}>{statusMessage}</div>
      <div className="text-lg mt-10">
        <p>Wrong guesses: {wrong.size}/{lostSize}</p>
        <p>Correct guesses: {correct.size}</p>
        <p>Difficulty: {difficultyToString(lostSize)}</p>
      </div>
      <div className="text-lg mt-2">
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <p>Games: {wins + losses}</p>
        <p>Win rate: {wins + losses > 0 ? Math.floor((wins / (wins + losses)) * 100) : 0}%</p>
      </div>
    </div>
  );
}
