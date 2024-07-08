import { EDifficulty } from "@/app/data/difficulty";

export default function NewWord({ newWord }: { newWord: (difficulty: EDifficulty) => void }) {
  return (
    <div className="flex flex-col space-y-2">
      <button
        className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.EASY)}
      >
        New Easy (1)
      </button>
      <button
        className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.MEDIUM)}
      >
        New Medium (2)
      </button>
      <button
        className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.HARD)}
      >
        New Hard (3)
      </button>
      <button
        className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
        onClick={() => newWord(EDifficulty.EXTREME)}
      >
        New Extreme (4)
      </button>
    </div>
  );
}
