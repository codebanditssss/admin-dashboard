import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import SkillPopup from './SkillPopup';

const Score = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setShowPopup(true)}
      >
        <div className="flex items-center justify-between mb-2">
          <Globe className="text-blue-600 text-xl" />
          <span className="text-blue-600 font-semibold text-2xl">742</span>
        </div>
        <h3 className="text-lg font-semibold">My Score</h3>
      </div>

      {showPopup && <SkillPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Score;