import React from 'react';
import { Lock, Star, Trophy, Target } from 'lucide-react';

const AdvancedPreview = () => {
  const upcomingChallenges = [
    {
      title: "System Architecture Design",
      difficulty: "Advanced",
      rewards: "500 XP + Gold Badge",
      requirements: ["Complete Intermediate Path", "80% Success Rate"]
    },
    {
      title: "Microservices Implementation",
      difficulty: "Advanced",
      rewards: "600 XP + Special Certificate",
      requirements: ["Backend Mastery", "API Design Skills"]
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Advanced Preview</h3>
          <p className="text-sm text-gray-500">Your next learning milestone</p>
        </div>
        <Lock className="text-blue-600 w-5 h-5" />
      </div>

      <div className="space-y-4">
        {upcomingChallenges.map((challenge, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-medium">{challenge.title}</h4>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                {challenge.difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span>{challenge.rewards}</span>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium">Requirements:</span>
              {challenge.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                  <Target className="w-4 h-4" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View Advanced Path
      </button>
    </div>
  );
};

export default AdvancedPreview;