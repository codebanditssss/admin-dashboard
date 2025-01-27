import React from 'react';
import { XCircle, TrendingUp, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GoalAnalytics = ({ onClose }) => {
  const progressData = [
    { month: 'Jan', completed: 4, active: 3 },
    { month: 'Feb', completed: 6, active: 4 },
    { month: 'Mar', completed: 5, active: 5 },
    { month: 'Apr', completed: 8, active: 3 }
  ];

  const typeDistribution = [
    { name: 'Skill Improvement', value: 45 },
    { name: 'Rank Achievement', value: 30 },
    { name: 'Test Completion', value: 25 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Goal Analytics</h2>
            <p className="text-sm text-gray-500">Track your goal progress and patterns</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Success Rate</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">85%</span>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="font-medium">Completed</span>
            </div>
            <span className="text-2xl font-bold text-green-600">23</span>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="font-medium">In Progress</span>
            </div>
            <span className="text-2xl font-bold text-yellow-600">8</span>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="font-medium">Overdue</span>
            </div>
            <span className="text-2xl font-bold text-red-600">2</span>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Progress Over Time */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-4">Progress Over Time</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="completed" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="active" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Goal Type Distribution */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-4">Goal Type Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={typeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {typeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {typeDistribution.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalAnalytics;