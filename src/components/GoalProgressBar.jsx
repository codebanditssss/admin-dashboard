import React from 'react';

const GoalProgressBar = ({ progress, showLabel = true }) => {
  return (
    <div>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="text-blue-600 font-medium">{progress}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 rounded-full h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default GoalProgressBar;