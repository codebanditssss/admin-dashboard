import React from 'react';
import { XCircle, Download, Trophy, MapPin, Globe } from 'lucide-react';
import SkillRadarChart from './SkillRadarChart';
import ProgressLineChart from './ProgressLineChart';

const TestDetailsModal = ({ test, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full m-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">{test.name}</h2>
            <p className="text-gray-500 text-sm">Completed on {test.dateCompleted}</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => {/* Certificate download logic */}}
            >
              <Download className="w-4 h-4" />
              Certificate
            </button>
            <button onClick={onClose}>
              <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Your Score</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{test.score}/100</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-medium">State Rank</span>
            </div>
            <div className="text-2xl font-bold">{test.stateRank}/{test.totalStateParticipants}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Country Rank</span>
            </div>
            <div className="text-2xl font-bold">{test.countryRank}/{test.totalCountryParticipants}</div>
          </div>
        </div>

        {/* Skill Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-4">Skill Performance</h3>
            <div className="h-64">
              <SkillRadarChart skills={test.skillScores} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Progress Trend</h3>
            <div className="h-64">
              <ProgressLineChart data={test.progressData} />
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Performance Analysis</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-green-600">Strengths</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                {test.feedback.strengths.map((strength, idx) => (
                  <li key={idx}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-600">Areas for Improvement</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                {test.feedback.improvements.map((improvement, idx) => (
                  <li key={idx}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Suggested Next Steps */}
        <div>
          <h3 className="font-semibold mb-3">Recommended Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {test.recommendations.map((rec, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">{rec.title}</h4>
                <p className="text-sm text-gray-600">{rec.description}</p>
                <button className="mt-2 text-blue-600 text-sm hover:underline">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetailsModal;