// ProgressStreaks.jsx
import React from 'react';
import { Flame, Calendar, Award, TrendingUp } from 'lucide-react';

const ProgressStreaks = () => {
  const streakData = {
    currentStreak: 7,
    longestStreak: 21,
    weeklyGoal: 5,
    completedThisWeek: 3,
    dailyActivities: [
      { date: '2024-01-22', completed: true },
      { date: '2024-01-23', completed: true },
      { date: '2024-01-24', completed: true },
      { date: '2024-01-25', completed: true },
      { date: '2024-01-26', completed: true },
      { date: '2024-01-27', completed: true },
      { date: '2024-01-28', completed: true }
    ]
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Learning Streaks</h3>
          <p className="text-sm text-gray-500">Keep your momentum going!</p>
        </div>
        <Flame className="text-orange-500 w-6 h-6" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">Current Streak</span>
          </div>
          <div className="text-2xl font-bold text-orange-500">{streakData.currentStreak} days</div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Longest Streak</span>
          </div>
          <div className="text-2xl font-bold text-blue-500">{streakData.longestStreak} days</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">This Week's Progress</span>
          <span className="text-sm text-gray-500">{streakData.completedThisWeek}/{streakData.weeklyGoal} days</span>
        </div>
        <div className="flex gap-1">
          {streakData.dailyActivities.map((day, index) => (
            <div 
              key={index}
              className={`flex-1 h-8 rounded-lg ${
                day.completed ? 'bg-green-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-blue-500" />
          <span className="font-medium">Next Milestone</span>
        </div>
        <p className="text-sm text-gray-600">4 more days to reach your best streak!</p>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressStreaks;