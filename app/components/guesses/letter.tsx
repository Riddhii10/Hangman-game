export default function Letter({
    chosen,
    wrong,
    onClick,
    letter,
    gameOver,
  }: {
    chosen: boolean,
    wrong: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    letter: string,
    gameOver: boolean,
  }) {
    const basicClasses = 'text-base h-10 w-8 mx-1 my-1 font-semibold border-[#ffffff] border-2 rounded-md ';
    const correctLetterClasses = 'bg-[#50AA30] text-[#0b3d3a]';
    const incorrectLetterClasses = 'bg-[#F26B6B] text-[#8B0000]';
    const gameOverUnselectedLetterClasses = 'bg-[#8C8C8C] text-[#ffffff] cursor-default'; 
    const unselectedLetterClasses = 'bg-[#8C8C8C] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out';
    const selectedLetterClasses = wrong ? incorrectLetterClasses : correctLetterClasses;
    const classes = `${basicClasses} ${chosen ? selectedLetterClasses : gameOver ? gameOverUnselectedLetterClasses : unselectedLetterClasses}`;
    return (
      <button
        className={classes}
        onClick={onClick}
        disabled={chosen}
      >
        {letter}
      </button>
    );
  }