   
export default function NewWord({ newWord, newWordCount }: { newWord: () => void, newWordCount: number }) {
    return (
      <div className="flex flex-col items-center mt-8 ">
        <button
          className={`w-28 h-12 text-base my-2 font-semibold border-2 border-[#ffffff] ${newWordCount >= 3 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#8c8c8c] hover:bg-[#676767]'} text-[#ffffff] transition-colors duration-300 ease-in-out shadow-lg`} // Update button style based on newWordCount
          onClick={newWord}
          disabled={newWordCount >= 3} 
        >
          {newWordCount >= 3 ? 'Limit Reached' : 'New Word'} 
        </button>
      </div>
    );
  }
  