import React from 'react';
import { Users, TrendingUp } from 'lucide-react';

const CompetitorComparison = () => {
  const competitors = [
    {
      name: 'You',
      skills: { React: 75, Node: 68, Python: 82 },
      rank: 156
    },
    {
      name: 'Top Performer',
      skills: { React: 92, Node: 88, Python: 95 },
      rank: 1
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Competitor Analysis</h3>
        <Users className="text-blue-600 w-5 h-5" />
      </div>

      <div className="space-y-4">
        {Object.keys(competitors[0].skills).map((skill) => (
          <div key={skill} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{skill}</span>
              <span className="text-blue-600">
                {competitors[0].skills[skill]}% vs {competitors[1].skills[skill]}%
              </span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600"
                style={{ width: `${competitors[0].skills[skill]}%` }}
              />
              <div 
                className="bg-gray-300"
                style={{ width: `${competitors[1].skills[skill] - competitors[0].skills[skill]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        <div className="flex items-center text-green-600 mb-2">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="font-medium">Your Growth Potential</span>
        </div>
        <p className="text-sm text-gray-600">
          You're in the top 15% of intermediate developers. Keep pushing!
        </p>
      </div>
    </div>
  );
};

export default CompetitorComparison;