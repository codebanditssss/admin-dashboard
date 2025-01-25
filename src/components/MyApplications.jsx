import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import { FiClock, FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

const MyApplications = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterStatus, setFilterStatus] = useState('all');

  const applicationData = {
    stats: {
      total: 45,
      pending: 15,
      interviewing: 8,
      rejected: 12,
      accepted: 10
    },
    timeline: [
      { week: 'Week 1', applications: 8, responses: 3 },
      { week: 'Week 2', applications: 12, responses: 5 },
      { week: 'Week 3', applications: 15, responses: 7 },
      { week: 'Week 4', applications: 10, responses: 6 }
    ],
    skillMatchData: [
      { skill: 'Technical', value: 85 },
      { skill: 'Communication', value: 90 },
      { skill: 'Leadership', value: 75 },
      { skill: 'Problem Solving', value: 88 },
      { skill: 'Teamwork', value: 92 }
    ]
  };

  const applications = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp",
      status: "Interviewing",
      stage: "Technical Round",
      nextStep: "System Design Interview - 25th Jan",
      appliedDate: "2024-01-15",
      location: "New York, NY",
      type: "Full-time",
      matchScore: 92,
      timeline: [
        { date: "2024-01-15", event: "Application Submitted" },
        { date: "2024-01-18", event: "Initial Screening" },
        { date: "2024-01-20", event: "HR Interview" },
        { date: "2024-01-22", event: "Technical Assessment" }
      ]
    },
    {
      id: 2,
      role: "Full Stack Engineer",
      company: "InnovateTech",
      status: "Pending",
      stage: "Application Review",
      nextStep: "Awaiting Response",
      appliedDate: "2024-01-20",
      location: "Remote",
      type: "Contract",
      matchScore: 88,
      timeline: [
        { date: "2024-01-20", event: "Application Submitted" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Interviewing: 'bg-blue-100 text-blue-800',
      Rejected: 'bg-red-100 text-red-800',
      Accepted: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      Pending: <FiClock className="text-yellow-500" />,
      Interviewing: <FiAlertCircle className="text-blue-500" />,
      Rejected: <FiXCircle className="text-red-500" />,
      Accepted: <FiCheckCircle className="text-green-500" />
    };
    return icons[status] || null;
  };

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" , paddingTop: "44px"}}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header with Interactive Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">My Applications</h1>
              <p className="text-gray-600">Track and manage your job applications</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
              >
                <i className="bi bi-grid"></i>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>

          {/* Application Timeline Chart */}
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={applicationData.timeline}>
              <defs>
                <linearGradient id="appColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="applications" 
                stroke="#3B82F6" 
                fillOpacity={1} 
                fill="url(#appColor)" 
              />
              <Area 
                type="monotone" 
                dataKey="responses" 
                stroke="#10B981" 
                fillOpacity={1} 
                fill="url(#responseColor)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {Object.entries(applicationData.stats).map(([key, value]) => (
            <div key={key} className="bg-white rounded-xl shadow p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 capitalize">{key}</p>
                  <h3 className="text-2xl font-bold">{value}</h3>
                </div>
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  key === 'total' ? 'bg-blue-100' :
                  key === 'pending' ? 'bg-yellow-100' :
                  key === 'accepted' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {getStatusIcon(key.charAt(0).toUpperCase() + key.slice(1))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Match Radar */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Skill Match Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={applicationData.skillMatchData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Applications</h3>
            <select 
              className="px-4 py-2 border rounded-lg"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="space-y-4">
            {applications.map(app => (
              <div 
                key={app.id} 
                className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{app.role}</h4>
                    <p className="text-gray-600 mb-2">{app.company} • {app.location}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                      <span className="text-sm text-gray-500">{app.type}</span>
                      <span className="text-sm text-gray-500">Applied: {app.appliedDate}</span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h5 className="font-medium mb-2">Application Timeline</h5>
                      <div className="space-y-2">
                        {app.timeline.map((event, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-600">{event.date}: {event.event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {app.matchScore}%
                    </div>
                    <span className="text-sm text-gray-500">Match Score</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-medium">Next Step</h5>
                    <p className="text-sm text-gray-600">{app.nextStep}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;