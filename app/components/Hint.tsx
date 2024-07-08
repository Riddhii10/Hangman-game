// components/Hint.tsx

import React from 'react';

interface HintProps {
  hint: string;
}

const Hint: React.FC<HintProps> = ({ hint }) => {
  return (
    <div className="text-center text-lg mt-4">
      <p className="text-[#0b3d3a] font-bold">Hint:</p>
      <p className="text-[#37f664]">{hint}</p>
    </div>
  );
};

export default Hint;
