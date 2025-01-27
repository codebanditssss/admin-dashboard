import React from 'react';
import { Star, Clock, Trophy } from 'lucide-react';

const BeginnerChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: "HTML Basics Quiz",
      difficulty: "Easy",
      timeRequired: "15 mins",
      points: 100,
      completed: false,
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      difficulty: "Easy",
      timeRequired: "20 mins",
      points: 150,
      completed: true,
    },
    {
      id: 3,
      title: "JavaScript Variables",
      difficulty: "Medium",
      timeRequired: "25 mins",
      points: 200,
      completed: false,
    },
  ];

  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className={`p-4 rounded-lg border ${
            challenge.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
          } hover:border-blue-500 transition-colors`}
        >
          <div>
            <h4 className="font-medium mb-2">{challenge.title}</h4>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{challenge.difficulty}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{challenge.timeRequired}</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>{challenge.points} pts</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {challenge.completed ? (
              <span className="block w-full text-center py-2 bg-green-600 text-white text-sm rounded-lg">
                Completed
              </span>
            ) : (
              <button className="block w-full text-center py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                Start
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeginnerChallenges;
