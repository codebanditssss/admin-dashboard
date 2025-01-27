import React, { useState } from 'react';
import { Plus, Rocket, Calendar, Trophy, Users } from 'lucide-react';
import GoalCreationWizard from './GoalCreationWizard';
import GoalProgressBar from './GoalProgressBar';
import GoalCalendarView from './GoalCalendarView';
import AchievementsModal from './AchievementsModal';
import GoalAnalytics from './GoalAnalytics';
import VisionBoard from './VisionBoard';

const Goals = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showVisionBoard, setShowVisionBoard] = useState(false);

  const goals = [
    {
      id: 1,
      type: 'skill',
      title: 'Master React Advanced Concepts',
      progress: 70,
      deadline: '2024-02-28',
      milestones: [
        { title: 'Complete Hooks Course', completed: true },
        { title: 'Build 3 Projects', completed: true },
        { title: 'Master Context API', completed: false },
      ],
      collaborators: ['John', 'Sarah']
    },
    // Add more goals as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Goals</h3>
          <p className="text-sm text-gray-500">Track your learning journey</p>
        </div>
        <button 
          onClick={() => setShowWizard(true)}
          className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">Active Goals</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">5</span>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">Completed</span>
          </div>
          <span className="text-2xl font-bold text-green-600">12</span>
        </div>
      </div>

      {/* Active Goals List */}
      <div className="space-y-4 mb-4">
        {goals.map(goal => (
          <div key={goal.id} className="border rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-sm">{goal.title}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>Due {goal.deadline}</span>
                  {goal.collaborators.length > 0 && (
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{goal.collaborators.length} collaborators</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <GoalProgressBar progress={goal.progress} />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 text-sm">
        <button 
          onClick={() => setShowCalendar(true)}
          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Calendar className="w-4 h-4" />
          Calendar
        </button>
        <button 
          onClick={() => setShowAchievements(true)}
          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Trophy className="w-4 h-4" />
          Achievements
        </button>
        <button 
          onClick={() => setShowAnalytics(true)}
          className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Rocket className="w-4 h-4" />
          Analytics
        </button>
      </div>

      {/* Modals */}
      {showWizard && (
        <GoalCreationWizard onClose={() => setShowWizard(false)} />
      )}
      {showAchievements && (
        <AchievementsModal onClose={() => setShowAchievements(false)} />
      )}
      {showCalendar && (
        <GoalCalendarView onClose={() => setShowCalendar(false)} />
      )}
      {showAnalytics && (
        <GoalAnalytics onClose={() => setShowAnalytics(false)} />
      )}
      {showVisionBoard && (
        <VisionBoard onClose={() => setShowVisionBoard(false)} />
      )}
    </div>
  );
};

export default Goals;