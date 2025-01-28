// IntermediateStart.jsx
import React, { useState } from 'react';
import { Trophy, Users, Star, Target, Book, Award, MessageSquare } from 'lucide-react';
import SkillMasteryTracker from './SkillMasteryTracker';
import CompetitorComparison from './CompetitorComparison';
import IntermediateChallenges from './IntermediateChallenges';
import GoalSuggestions from './GoalSuggestions';
import PeerMentorship from './PeerMentorship';

const IntermediateStart = ({ onClose }) => {
  const [activeView, setActiveView] = useState('skills');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4"> {/* Matched size with BeginnerStart */}
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Intermediate Learning Path</h2>
            <p className="text-sm text-gray-500">Enhance your skills to the next level</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <Trophy className="text-blue-600 w-5 h-5 mb-1" />
            <h3 className="font-medium text-sm">Current Level</h3>
            <p className="text-xs text-gray-500">Intermediate II</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <Star className="text-green-600 w-5 h-5 mb-1" />
            <h3 className="font-medium text-sm">Skills Mastered</h3>
            <p className="text-xs text-gray-500">8 of 12</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <Award className="text-purple-600 w-5 h-5 mb-1" />
            <h3 className="font-medium text-sm">Next Goal</h3>
            <p className="text-xs text-gray-500">Advanced Path</p>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="flex space-x-2 mb-4">
          {['skills', 'challenges', 'mentorship'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeView === view 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="mb-4">
          {activeView === 'skills' && (
            <div className="space-y-3">
              <SkillMasteryTracker />
              <CompetitorComparison />
            </div>
          )}
          {activeView === 'challenges' && (
            <div className="space-y-3">
              <IntermediateChallenges />
              <GoalSuggestions />
            </div>
          )}
          {activeView === 'mentorship' && (
            <PeerMentorship />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntermediateStart;