import React, { useState } from 'react';
import { ChevronRight, BookOpen, Trophy, Target, X } from 'lucide-react';
import OnboardingGuide from './OnboardingGuide';
import BeginnerChallenges from './BeginnerChallenges';
import ResourceHub from './ResourceHub';
import MilestoneTracker from './MilestoneTracker';
import MotivationWidget from './MotivationWidget';
import FAQSection from './FAQSection';
import WelcomeMessage from './WelcomeMessage';

const BeginnerStart = ({ onClose, onContinue }) => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl w-full h-auto max-h-[620px] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Getting Started with Your Learning Journey</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <WelcomeMessage />

        {/* Quick Start Actions */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button 
            onClick={() => setShowOnboarding(true)}
            className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
          >
            <BookOpen className="text-blue-600 w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Start Learning</span>
          </button>
          <button className="flex flex-col items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
            <Trophy className="text-purple-600 w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Daily Challenge</span>
          </button>
          <button className="flex flex-col items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition">
            <Target className="text-green-600 w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Set Goals</span>
          </button>
        </div>

        {/* Progress Summary */}
        <div className="border rounded-lg p-4 mb-6">
          <MilestoneTracker />
        </div>

        {/* Resources and Challenges */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Recommended Resources</h3>
            <ResourceHub />
          </div>
          <div>
            <h3 className="font-semibold mb-3">Beginner Challenges</h3>
            <BeginnerChallenges />
          </div>
        </div>

        {/* Motivation and FAQ */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <MotivationWidget />
          <FAQSection />
        </div>

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Done
          </button>
        </div>

        {/* Onboarding Modal */}
        {showOnboarding && (
          <OnboardingGuide onClose={() => setShowOnboarding(false)} />
        )}
      </div>
    </div>
  );
};

export default BeginnerStart;