// IntermediateChallenges.jsx
import React from 'react';
import { Target, Clock, Award, Star } from 'lucide-react';

const IntermediateChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: 'Build a Full-Stack App',
      difficulty: 'Medium',
      timeRequired: '5 days',
      xpPoints: 500,
      status: 'active',
      progress: 60
    },
    {
      id: 2,
      title: 'Advanced API Integration',
      difficulty: 'Hard',
      timeRequired: '3 days',
      xpPoints: 300,
      status: 'upcoming',
      progress: 0
    },
    {
      id: 3,
      title: 'System Design Challenge',
      difficulty: 'Medium',
      timeRequired: '4 days',
      xpPoints: 400,
      status: 'completed',
      progress: 100
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Skill Challenges</h3>
        <Target className="text-blue-600 w-5 h-5" />
      </div>

      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div 
            key={challenge.id} 
            className={`p-3 rounded-lg border ${
              challenge.status === 'active' ? 'border-blue-200 bg-blue-50' :
              challenge.status === 'completed' ? 'border-green-200 bg-green-50' :
              'border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{challenge.title}</h4>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {challenge.timeRequired}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {challenge.difficulty}
                  </span>
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {challenge.xpPoints} XP
                  </span>
                </div>
              </div>
              {challenge.status === 'active' && (
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                  Continue
                </button>
              )}
            </div>
            {challenge.status === 'active' && (
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-600 rounded-full h-1.5 transition-all duration-300"
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntermediateChallenges;