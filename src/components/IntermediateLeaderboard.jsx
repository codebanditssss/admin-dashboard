import React, { useState } from 'react';
import { Trophy, Globe, MapPin, Search } from 'lucide-react';

const IntermediateLeaderboard = () => {
  const [scope, setScope] = useState('state'); // 'state', 'national', 'global'
  
  const rankings = {
    state: [
      { rank: 1, name: 'Alex Chen', score: 2840, progress: 92 },
      { rank: 2, name: 'Sarah Kim', score: 2795, progress: 88 },
      { rank: 3, name: 'Mike Johnson', score: 2760, progress: 85 }
    ],
    national: [
      { rank: 1, name: 'John Smith', score: 2950, progress: 95 },
      { rank: 2, name: 'Emma Davis', score: 2920, progress: 93 },
      { rank: 3, name: 'David Wang', score: 2890, progress: 91 }
    ],
    global: [
      { rank: 1, name: 'Maria Garcia', score: 3100, progress: 98 },
      { rank: 2, name: 'Liu Wei', score: 3080, progress: 97 },
      { rank: 3, name: 'Raj Patel', score: 3050, progress: 96 }
    ]
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Leaderboard</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setScope('state')}
            className={`p-2 rounded-lg ${
              scope === 'state' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
            }`}
          >
            <MapPin className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setScope('national')}
            className={`p-2 rounded-lg ${
              scope === 'national' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
            }`}
          >
            <Globe className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {rankings[scope].map((user, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 flex items-center justify-center rounded-full ${
                index === 0 ? 'bg-yellow-100 text-yellow-600' :
                index === 1 ? 'bg-gray-100 text-gray-600' :
                index === 2 ? 'bg-orange-100 text-orange-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {user.rank}
              </span>
              <span className="font-medium">{user.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-medium">{user.score}</span>
              <div className="w-20 h-1.5 bg-gray-200 rounded-full">
                <div 
                  className="h-1.5 bg-blue-600 rounded-full"
                  style={{ width: `${user.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm">
        View Full Rankings
      </button>
    </div>
  );
};

export default IntermediateLeaderboard;