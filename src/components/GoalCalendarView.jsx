// GoalCalendarView.jsx
import React, { useState } from 'react';
import { XCircle, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const GoalCalendarView = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample goals data
  const goals = [
    {
      id: 1,
      title: "Complete React Course",
      deadline: "2024-02-15",
      type: "learning",
      priority: "high"
    },
    {
      id: 2,
      title: "AWS Certification",
      deadline: "2024-02-20",
      type: "certification",
      priority: "medium"
    },
    {
      id: 3,
      title: "System Design Study",
      deadline: "2024-02-25",
      type: "learning",
      priority: "low"
    }
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getGoalsForDate = (day) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return goals.filter(goal => goal.deadline === dateStr);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full m-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Goal Calendar</h2>
            <p className="text-sm text-gray-500">View and manage your goal deadlines</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Calendar Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h3>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {/* Weekday headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {generateCalendarDays().map((day, index) => {
            const goals = getGoalsForDate(day);
            const hasGoals = goals.length > 0;

            return (
              <div
                key={index}
                className={`min-h-[100px] p-2 rounded-lg border ${
                  day ? 'hover:border-blue-500 cursor-pointer' : ''
                } ${selectedDate === day ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                onClick={() => day && setSelectedDate(day)}
              >
                {day && (
                  <>
                    <div className="flex justify-between items-start">
                      <span className={`text-sm ${hasGoals ? 'font-medium' : ''}`}>{day}</span>
                      {hasGoals && (
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      )}
                    </div>
                    <div className="mt-1 space-y-1">
                      {goals.map(goal => (
                        <div 
                          key={goal.id}
                          className={`text-xs p-1 rounded ${
                            goal.priority === 'high' ? 'bg-red-100 text-red-700' :
                            goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}
                        >
                          {goal.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Date Details */}
        {selectedDate && (
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">
              Goals for {currentDate.toLocaleString('default', { month: 'long' })} {selectedDate}
            </h4>
            <div className="space-y-2">
              {getGoalsForDate(selectedDate).map(goal => (
                <div 
                  key={goal.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h5 className="font-medium">{goal.title}</h5>
                    <p className="text-sm text-gray-500">{goal.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    goal.priority === 'high' ? 'bg-red-100 text-red-700' :
                    goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {goal.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalCalendarView;