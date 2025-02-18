import React from 'react';
import { XCircle, Trophy, Star, Medal, Target } from 'lucide-react';

const AchievementsModal = ({ onClose }) => {
  const achievements = [
    {
      id: 1,
      title: "Goal Setter Pro",
      description: "Completed 10 goals successfully",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      level: "Gold",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Skill Master",
      description: "Achieved expert level in 5 skills",
      icon: <Star className="w-6 h-6 text-blue-500" />,
      level: "Silver",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Streak Champion",
      description: "Maintained a 30-day learning streak",
      icon: <Medal className="w-6 h-6 text-purple-500" />,
      level: "Bronze",
      date: "2024-01-05"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Achievements</h2>
            <p className="text-sm text-gray-500">Your learning milestones</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="font-medium">Gold</span>
            </div>
            <span className="text-2xl font-bold text-yellow-600">3</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="font-medium">Silver</span>
            </div>
            <span className="text-2xl font-bold text-gray-600">5</span>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Medal className="w-4 h-4 text-orange-600" />
              <span className="font-medium">Bronze</span>
            </div>
            <span className="text-2xl font-bold text-orange-600">8</span>
          </div>
        </div>

        {/* Achievements List */}
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-white p-3 rounded-full">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    achievement.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                    achievement.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {achievement.level}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Achieved on {achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;