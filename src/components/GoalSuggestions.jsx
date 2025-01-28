import React from 'react';
import { Target, TrendingUp, Star, Clock } from 'lucide-react';

const GoalSuggestions = () => {
  const goals = [
    {
      id: 1,
      title: 'Master System Design',
      description: 'Focus on advanced system architecture concepts',
      timeframe: '3 months',
      difficulty: 'High',
      impact: 'Critical for Senior roles'
    },
    {
      id: 2,
      title: 'Complete AWS Certification',
      description: 'Gain expertise in cloud architecture',
      timeframe: '2 months',
      difficulty: 'Medium',
      impact: 'High demand skill'
    },
    {
      id: 3,
      title: 'Build Open Source Portfolio',
      description: 'Contribute to major projects',
      timeframe: 'Ongoing',
      difficulty: 'Medium',
      impact: 'Community recognition'
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recommended Goals</h3>
        <Target className="text-blue-600 w-5 h-5" />
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium">{goal.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${
                goal.difficulty === 'High' ? 'bg-orange-100 text-orange-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {goal.difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {goal.timeframe}
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                {goal.impact}
              </span>
            </div>

            <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Add to Goals
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalSuggestions;