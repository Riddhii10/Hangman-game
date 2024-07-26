export default function Status({
    wrong,
    correct,
    gameOver,
    losses,
    wins,
    newWord,
  }: {
    wrong: Set<string>;
    correct: Set<string>;
    gameOver: boolean;
    losses: number;
    wins: number;
    newWord:()=>void
  }) {
    const lostSize = 6; 
    let statusColor = "bg-yellow-500"; 
    let statusMessage = "Keep guessing!";
  
    if (gameOver) {
      if (wrong.size >= lostSize) {
        statusColor = "bg-red-500"; 
        statusMessage = "You lost!";
      } else {
        statusColor = "bg-green-500"; 
        statusMessage = "You won!";
      }
    }
  
    return (
      <div className="rounded-lg shadow-lg text-white bg-opacity-100 h-5/6 w-3/5 bg-[#676767]">
        <div className={`text-3xl font-bold mb-6 rounded-full mt-28 ${statusColor} w-2/6 text-center h-1/6 mx-auto items-center flex justify-center`}>
            
          {statusMessage}
        </div>
        <div className="text-lg mt-2 flex justify-center flex-col items-center gap-3">
          {/* <p>Wins: {wins}</p>
          <p>Losses: {losses}</p>
          <p>Games: {wins + losses}</p> */}
          <div>Wins: {wins}</div>
          <div>Losses: {losses}</div>
          <div>Games: {wins + losses}</div>
        </div>
        {gameOver && (
        <div className="mt-[67px] flex justify-center">
          <button
            className="w-28 h-12 text-base font-semibold border-2 border-[#ffffff] bg-[#8c8c8c] text-[#ffffff] hover:bg-[#676767] hover:text-black transition-colors duration-300 ease-in-out shadow-lg"
            onClick={newWord}
          >
            Play Again
          </button>
        </div>
      )}
      </div>
    );
  }
  