import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const MilestoneTracker = () => {
  const milestones = [
    {
      id: 1,
      title: "Complete Profile Setup",
      description: "Fill in all profile details",
      completed: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "First Assessment",
      description: "Complete your first skill assessment",
      completed: true,
      date: "2024-01-16"
    },
    {
      id: 3,
      title: "Set Learning Goals",
      description: "Define your learning objectives",
      completed: false
    },
    {
      id: 4,
      title: "Join Community",
      description: "Connect with other learners",
      completed: false
    }
  ];

  const progress = (milestones.filter(m => m.completed).length / milestones.length) * 100;

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">Beginner Milestones</span>
          <span className="text-blue-600">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.id}
            className={`flex items-start gap-3 ${
              index !== milestones.length - 1 ? 'pb-4 border-b' : ''
            }`}
          >
            {milestone.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300 mt-0.5" />
            )}
            <div>
              <h4 className="font-medium">{milestone.title}</h4>
              <p className="text-sm text-gray-500">{milestone.description}</p>
              {milestone.completed && milestone.date && (
                <p className="text-xs text-gray-400 mt-1">
                  Completed on {milestone.date}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTracker;