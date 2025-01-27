import React from 'react';
import { MapPin, Star } from 'lucide-react';

const WelcomeMessage = () => {
  // This could come from your user context/state
  const userData = {
    name: "Khushi",
    state: "Delhi",
    timeOfDay: getTimeOfDay(),
    lastLoginStreak: 5,
    recentAchievement: "Completed First Assessment"
  };

  function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 17) return "afternoon";
    return "evening";
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl mb-6 p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Good {userData.timeOfDay}, {userData.name}! 👋
          </h1>
          <div className="flex items-center gap-2 text-blue-100 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{userData.state}</span>
            {userData.lastLoginStreak > 0 && (
              <>
                <span className="mx-2">•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {userData.lastLoginStreak} day streak
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {userData.recentAchievement && (
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <div className="flex items-start gap-3">
            <div className="bg-white rounded-full p-2">
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-medium">Recent Achievement</h3>
              <p className="text-blue-100 text-sm">{userData.recentAchievement}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex gap-4">
        <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Continue Learning
        </button>
        <button className="px-4 py-2 bg-blue-400/20 text-white rounded-lg hover:bg-blue-400/30 transition-colors">
          View Progress
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;