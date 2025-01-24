import React, { useState } from 'react';
import { FiClock, FiCheck, FiAward, FiBarChart2 } from 'react-icons/fi';
import { PiTarget, PiBrain, PiChartLine, PiTrophy } from 'react-icons/pi';

const SkillAssessment = () => {
  const [selectedCategory, setSelectedCategory] = useState('featured');

  const categories = [
    { id: 'featured', label: 'Featured' },
    { id: 'technical', label: 'Technical' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'domain', label: 'Domain' }
  ];

  const assessments = [
    {
      title: "React.js Advanced",
      category: "technical",
      duration: "45 mins",
      questions: 30,
      difficulty: "Advanced",
      skills: ["Components", "Hooks", "Redux"],
      level: "Level 3",
      reward: "React Expert Badge",
      thumbnail: "/api/placeholder/400/320"
    },
    {
      title: "Communication Skills",
      category: "soft",
      duration: "30 mins",
      questions: 25,
      difficulty: "Intermediate",
      skills: ["Verbal", "Written", "Presentation"],
      level: "Level 2",
      reward: "Effective Communicator Badge",
      thumbnail: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Skill Assessment</h1>
            <p className="text-gray-600">Validate your expertise and earn certifications</p>
          </div>
          <div className="relative mt-8">
            <input 
              type="text"
              placeholder="Search assessments..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex space-x-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.id 
                ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessments.map((assessment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={assessment.thumbnail}
                  alt={assessment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    assessment.difficulty === 'Advanced' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                  }`}>
                    {assessment.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{assessment.title}</h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="flex items-center mr-4">
                    <FiClock className="mr-1" />
                    {assessment.duration}
                  </span>
                  <span>{assessment.questions} questions</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {assessment.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <FiAward className="mr-2 text-blue-500" />
                    <span className="text-sm">{assessment.reward}</span>
                  </div>
                  <span className="text-sm font-medium text-purple-600">
                    {assessment.level}
                  </span>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02]">
                  Start Assessment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Technical Skills</h3>
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <PiBrain className="text-blue-600 text-xl" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">15/20 completed</span>
                <span className="text-blue-600 font-medium">75%</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Soft Skills</h3>
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <PiTarget className="text-purple-600 text-xl" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-purple-600 rounded-full h-2" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">6/10 completed</span>
                <span className="text-purple-600 font-medium">60%</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Domain Knowledge</h3>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <PiChartLine className="text-green-600 text-xl" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-green-600 rounded-full h-2" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">9/20 completed</span>
                <span className="text-green-600 font-medium">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;