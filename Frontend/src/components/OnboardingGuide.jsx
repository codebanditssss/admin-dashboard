import React, { useState } from 'react';
import { XCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const OnboardingGuide = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to SkillSync",
      description: "Let's get you started on your learning journey",
      content: (
        <div className="space-y-4">
          <p>Here's what you'll learn in this quick guide:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>How to set your first learning goals</li>
            <li>Finding the right resources for your level</li>
            <li>Tracking your progress effectively</li>
            <li>Earning badges and rewards</li>
          </ul>
        </div>
      )
    },
    {
      title: "Set Your First Goal",
      description: "Begin with achievable targets",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Recommended First Goals:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Complete one beginner challenge</li>
              <li>• Watch an introductory tutorial</li>
              <li>• Take your first skill assessment</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Track Your Progress",
      description: "Monitor your learning journey",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Daily Tasks</h4>
              <p className="text-gray-600">Set small, achievable daily goals</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Weekly Reviews</h4>
              <p className="text-gray-600">Monitor your weekly progress</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">{steps[currentStep].title}</h2>
            <p className="text-gray-500">{steps[currentStep].description}</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="mb-8">
          {steps[currentStep].content}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 ${
              currentStep === 0 ? 'invisible' : ''
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={() => {
              if (currentStep === steps.length - 1) {
                onClose();
              } else {
                setCurrentStep(currentStep + 1);
              }
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            {currentStep !== steps.length - 1 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide;