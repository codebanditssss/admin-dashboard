import React from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';

const SkillMasteryTracker = () => {
  const skills = [
    { name: 'React', level: 75, target: 85, progress: 70 },
    { name: 'Node.js', level: 68, target: 80, progress: 65 },
    { name: 'Python', level: 82, target: 90, progress: 75 }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Skill Mastery</h3>
        <BarChart2 className="text-blue-600 w-5 h-5" />
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}% of {skill.target}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center text-blue-600 mb-2">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="font-medium">Growth Insights</span>
        </div>
        <p className="text-sm text-gray-600">
          You're making excellent progress! Focus on Node.js to reach your target level.
        </p>
      </div>
    </div>
  );
};

export default SkillMasteryTracker;