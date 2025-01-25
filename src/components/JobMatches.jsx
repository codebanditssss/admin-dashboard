import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { FiBriefcase, FiTrendingUp, FiSearch, FiMap } from 'react-icons/fi';

const JobMatches = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockData = {
    matchingTrends: [
      { month: 'Jan', matches: 45 },
      { month: 'Feb', matches: 52 },
      { month: 'Mar', matches: 48 },
      { month: 'Apr', matches: 70 },
      { month: 'May', matches: 65 },
    ],
    skillDistribution: [
      { name: 'React', value: 35 },
      { name: 'Node.js', value: 25 },
      { name: 'Python', value: 20 },
      { name: 'AWS', value: 20 },
    ],
    locationData: [
      { city: 'New York', openings: 120 },
      { city: 'San Francisco', openings: 90 },
      { city: 'Seattle', openings: 75 },
      { city: 'Boston', openings: 60 },
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "New York, NY",
      matchScore: 95,
      skills: ["React", "Redux", "TypeScript"],
      salary: "$120k - $150k",
      posted: "2 days ago",
      type: "Full-time",
      matchLevel: "Excellent"
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "InnoSoft",
      location: "Remote",
      matchScore: 88,
      skills: ["Node.js", "React", "MongoDB"],
      salary: "$100k - $130k",
      posted: "1 week ago",
      type: "Full-time",
      matchLevel: "Good"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" , paddingTop: "44px"}}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Job Matches</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and preferences</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Matches</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiBriefcase className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">↑ 12%</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Match Rate</p>
                <h3 className="text-2xl font-bold">85%</h3>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiTrendingUp className="text-green-600 text-xl" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">↑ 8%</span>
                <span className="text-gray-500 text-sm ml-2">improvement</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Applied</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FiSearch className="text-purple-600 text-xl" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-purple-500 text-sm">↑ 15%</span>
                <span className="text-gray-500 text-sm ml-2">response rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Matching Trends */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Matching Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockData.matchingTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="matches" 
                  stroke="#0088FE" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Distribution */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Skills in Demand</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockData.skillDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {mockData.skillDistribution.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Job Listings */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Matches</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search jobs..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select 
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Jobs</option>
                <option value="recent">Recent</option>
                <option value="highMatch">High Match</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {jobListings.map(job => (
              <div key={job.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                    <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.salary}</span>
                      <span>•</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold mb-1 ${
                      job.matchScore >= 90 ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {job.matchScore}% Match
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      job.matchLevel === 'Excellent' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.matchLevel}
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Location Analysis */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Job Distribution by Location</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData.locationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="openings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;