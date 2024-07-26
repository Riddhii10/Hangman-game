import React from 'react';

interface HintProps {
  hint: string;
}

const Hint: React.FC<HintProps> = ({ hint }) => {
  return (
    <div className="text-center ">
      <p className="text-[#676767] ">Hint : {hint}</p>
    </div>
  );
};

export default Hint;
