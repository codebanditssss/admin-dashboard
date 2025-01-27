import React, { useState } from 'react';
import { XCircle, ChevronDown, ChevronUp, Globe, MapPin } from 'lucide-react';

const myData = {
  currentSkills: [
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 80 }
  ],
  skillsToImprove: [
    { name: 'AWS', targetLevel: 80, currentLevel: 45 },
    { name: 'TypeScript', targetLevel: 75, currentLevel: 40 },
    { name: 'Docker', targetLevel: 70, currentLevel: 35 }
  ],
  ranks: {
    state: { rank: 15, total: 1200 },
    country: { rank: 742, total: 50000 }
  }
};

const topCompetitors = [
  {
    name: 'Akash Sharma',
    skills: {
      React: 95,
      'Node.js': 90,
      Python: 85,
      AWS: 88
    }
  },
  {
    name: 'Yash',
    skills: {
      React: 92,
      TypeScript: 94,
      Docker: 89,
      AWS: 91
    }
  }
];

const SkillPopup = ({ onClose }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showStateRank, setShowStateRank] = useState(true);

  const getSkillComparison = (skill) => {
    const mySkillLevel = myData.currentSkills.find(s => s.name === skill)?.level || 0;
    return topCompetitors
      .filter(comp => comp.skills[skill])
      .map(comp => ({
        name: comp.name,
        level: comp.skills[skill],
        difference: comp.skills[skill] - mySkillLevel
      }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Skills Analysis</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        {/* Rank Display */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div 
            className={`p-4 rounded-lg cursor-pointer ${
              showStateRank ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'
            }`}
            onClick={() => setShowStateRank(true)}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-medium">State Rank</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {myData.ranks.state.rank}/{myData.ranks.state.total}
            </div>
          </div>

          <div 
            className={`p-4 rounded-lg cursor-pointer ${
              !showStateRank ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'
            }`}
            onClick={() => setShowStateRank(false)}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Country Rank</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {myData.ranks.country.rank}/{myData.ranks.country.total}
            </div>
          </div>
        </div>

        {/* Current Skills */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Current Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {myData.currentSkills.map((skill) => (
              <div
                key={skill.name}
                className={`p-3 rounded-lg border cursor-pointer ${
                  selectedSkill === skill.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedSkill(skill.name)}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills to Improve */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Skills to Develop</h3>
          <div className="space-y-4">
            {myData.skillsToImprove.map((skill) => (
              <div key={skill.name} className="p-3 rounded-lg border border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <div className="text-sm">
                    <span className="text-gray-500">{skill.currentLevel}%</span>
                    <span className="mx-2">→</span>
                    <span className="text-blue-600">{skill.targetLevel}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${skill.currentLevel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Comparison */}
        {selectedSkill && (
          <div className="mt-6 border-t pt-6">
            <h3 className="font-semibold mb-3">Top Competitors in {selectedSkill}</h3>
            <div className="space-y-4">
              {getSkillComparison(selectedSkill).map((comp, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{comp.name}</span>
                    <span className="text-blue-600">{comp.level}%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {comp.difference > 0 ? (
                      <span className="text-red-500">+{comp.difference}% ahead</span>
                    ) : (
                      <span className="text-green-500">{Math.abs(comp.difference)}% behind</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillPopup;