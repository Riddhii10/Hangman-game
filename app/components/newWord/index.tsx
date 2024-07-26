

export default function NewWord({ newWord }: { newWord: () => void }) {
  return (
      <div className="flex flex-col items-center mt-8 ">
          <button
              className="w-28 h-12 text-base my-2 font-semibold border-2 border-[#ffffff] bg-[#8c8c8c] text-[#ffffff] hover:bg-[#676767] hover:text-black transition-colors duration-300 ease-in-out shadow-lg"
              onClick={newWord}
          >
              New Word
          </button>
      </div>
  );
}
