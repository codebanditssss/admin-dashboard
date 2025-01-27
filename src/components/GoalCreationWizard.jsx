import React, { useState } from 'react';
import { XCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const GoalCreationWizard = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [goalData, setGoalData] = useState({
    type: '',
    title: '',
    description: '',
    deadline: '',
    milestones: [],
    collaborators: []
  });

  const steps = [
    {
      title: 'Goal Type',
      component: (
        <div className="space-y-4">
          <h3 className="font-medium mb-4">What type of goal would you like to set?</h3>
          {['Skill Improvement', 'Rank Achievement', 'Test Completion'].map((type) => (
            <button
              key={type}
              onClick={() => {
                setGoalData({ ...goalData, type });
                setStep(2);
              }}
              className={`w-full p-4 rounded-lg border text-left hover:border-blue-500 ${
                goalData.type === type ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <h4 className="font-medium">{type}</h4>
              <p className="text-sm text-gray-500">
                {type === 'Skill Improvement' && 'Master specific skills and track your progress'}
                {type === 'Rank Achievement' && 'Set target ranks and climb the leaderboard'}
                {type === 'Test Completion' && 'Complete specific tests or certifications'}
              </p>
            </button>
          ))}
        </div>
      )
    },
    {
      title: 'Goal Details',
      component: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Goal Title</label>
            <input
              type="text"
              value={goalData.title}
              onChange={(e) => setGoalData({ ...goalData, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your goal title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={goalData.description}
              onChange={(e) => setGoalData({ ...goalData, description: e.target.value })}
              className="w-full p-2 border rounded-lg"
              rows="3"
              placeholder="Describe your goal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              type="date"
              value={goalData.deadline}
              onChange={(e) => setGoalData({ ...goalData, deadline: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Milestones',
      component: (
        <div className="space-y-4">
          <h3 className="font-medium mb-4">Add Milestones</h3>
          {goalData.milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={milestone}
                onChange={(e) => {
                  const newMilestones = [...goalData.milestones];
                  newMilestones[index] = e.target.value;
                  setGoalData({ ...goalData, milestones: newMilestones });
                }}
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={() => {
                  const newMilestones = goalData.milestones.filter((_, i) => i !== index);
                  setGoalData({ ...goalData, milestones: newMilestones });
                }}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => setGoalData({ 
              ...goalData, 
              milestones: [...goalData.milestones, ''] 
            })}
            className="text-blue-600 hover:text-blue-700"
          >
            + Add Milestone
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Create New Goal</h2>
            <p className="text-sm text-gray-500">Step {step} of {steps.length}</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        {steps[step - 1].component}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          )}
          {step < steps.length ? (
            <button
              onClick={() => setStep(step + 1)}
              className="ml-auto flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                // Handle goal creation
                onClose();
              }}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Goal
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalCreationWizard;