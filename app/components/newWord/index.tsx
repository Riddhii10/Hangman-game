// import { EDifficulty } from "@/app/data/difficulty";

// export default function NewWord({ newWord }: { newWord: (difficulty: EDifficulty) => void }) {
//   return (
//     <div className="flex flex-col space-y-2">
//       <button
//         className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
//         onClick={() => newWord(EDifficulty.EASY)}
//       >
//         New Easy (1)
//       </button>
//       <button
//         className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
//         onClick={() => newWord(EDifficulty.MEDIUM)}
//       >
//         New Medium (2)
//       </button>
//       <button
//         className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
//         onClick={() => newWord(EDifficulty.HARD)}
//       >
//         New Hard (3)
//       </button>
//       <button
//         className="text-lg font-bold border-2 border-[#ffffff] rounded-md p-2 bg-[#0b3d3a] text-[#ffffff] hover:bg-[#eeeeee] hover:text-[#0b3d3a] transition-colors duration-300 ease-in-out"
//         onClick={() => newWord(EDifficulty.EXTREME)}
//       >
//         New Extreme (4)
//       </button>
//     </div>
//   );
// }


import { EDifficulty } from "@/app/data/difficulty";

export default function NewWord({ newWord }: { newWord: (difficulty: EDifficulty) => void }) {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <button
        className="w-40 h-12 text-xl mx-1 my-2 font-bold border-2 border-[#ffffff] p-2 bg-[#9290C3] text-[#ffffff] hover:bg-[#1e90ff] hover:text-[#ffffff] transition-colors duration-300 ease-in-out shadow-lg"
        onClick={() => newWord(EDifficulty.EASY)}
      >
        Easy
      </button>
      <button
        className="w-40 h-12 text-xl mx-1 my-2 font-bold border-2 border-[#ffffff] p-2 bg-[#9290C3] text-[#ffffff] hover:bg-[#ff6347] hover:text-[#ffffff] transition-colors duration-300 ease-in-out shadow-lg"
        onClick={() => newWord(EDifficulty.MEDIUM)}
      >
      Medium
      </button>
      <button
        className="w-40 h-12 text-xl mx-1 my-2 font-bold border-2 border-[#ffffff] p-2 bg-[#9290C3] text-[#ffffff] hover:bg-[#ff4500] hover:text-[#ffffff] transition-colors duration-300 ease-in-out shadow-lg"
        onClick={() => newWord(EDifficulty.HARD)}
      >
      Hard
      </button>
      <button
        className="w-40 h-12 text-xl mx-1 my-2 font-bold border-2 border-[#ffffff] bg-[#9290C3] text-[#ffffff] hover:bg-[#ff0000] hover:text-[#ffffff] transition-colors duration-300 ease-in-out shadow-lg"
        onClick={() => newWord(EDifficulty.EXTREME)}
      >
      Extreme
      </button>
    </div>
  );
}
