import React, { useState, useMemo } from 'react';
import { Trophy, ChevronDown, ChevronUp, BookOpen, Target } from 'lucide-react';
import Leaderboard from './leaderboard';
import Score from './Score'; 
import TestsCompleted from './TestsCompleted';
import Goals from './Goals';
import BeginnerStart from './BeginnerStart';
import IntermediateStart from './IntermediateStart';

const SkillAssessment = () => { 
  const [showBeginnerStartModal, setShowBeginnerStartModal] = useState(false);
  const [showIntermediateStart, setShowIntermediateStart] = useState(false);
  const [modalContent, setModalContent] = useState('getting-started');

  const handleStartClick = (index) => {
    if (index === 0) {
      setShowBeginnerStartModal(true);
      setModalContent('getting-started');
    } else if (index===1) {
      setShowIntermediateStart(true);
    }
  };

  const handleContinue = () => {
    setModalContent('beginner-start');
  };

  const handleCloseModal = () => {
    setShowBeginnerStartModal(false);
  };

  const assessments = [
    {
      level: 'Beginner',
      title: 'Social Metrics Mastery',
      questions: 20,
      time: '30 mins',
      deadline: '1 Day',
      color: 'green'
    },
    {
      level: 'Intermediate',
      title: 'Social Media ROI and Reporting',
      questions: 30,
      time: '45 mins',
      deadline: '3 Days',
      color: 'yellow'
    },
    {
      level: 'Advanced',
      title: 'Mastering Social Media Analytics',
      questions: 60,
      time: '60 mins',
      deadline: '1 Week',
      color: 'red'
    }
  ];

  const jobSkills = [
    {
      title: 'Digital Marketing',
      description: 'A set of tests to assess essential digital marketing skills, including SEO, social media, and campaign management.',
      skills: ['Digital Marketing Basics', 'Marketing Fundamentals', 'SEO & SEM', 'Paid Advertising', 'Analytics & Data', 
               'Omnichannel Marketing', 'Advanced Analytics', 'Marketing Automation']
    },
    {
      title: 'Business Analyst',
      description: 'A set of tests to evaluate key business analyst skills, including data analysis, stakeholder communication, and problem-solving.',
      skills: ['Digital Marketing Basics', 'Marketing Fundamentals', 'SEO & SEM', 'Paid Advertising', 'Analytics & Data', 
               'Omnichannel Marketing', 'Advanced Analytics', 'Marketing Automation']
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" , paddingTop: "44px" }}>
      {/* Modal */}
      {showBeginnerStartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4">
            {modalContent === 'getting-started' ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Getting Started</h2>
                  <button 
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                    <BookOpen className="text-blue-600 w-4 h-4 mr-2" />
                    <span className="text-sm">Start Learning</span>
                  </button>
                  <button className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                    <Trophy className="text-purple-600 w-4 h-4 mr-2" />
                    <span className="text-sm">Take Challenge</span>
                  </button>
                  <button className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100">
                    <Target className="text-green-600 w-4 h-4 mr-2" />
                    <span className="text-sm">Set Goals</span>
                  </button>
                </div>
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleContinue}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Continue
                  </button>
                </div>
              </>
            ) : (
              <BeginnerStart 
                onClose={handleCloseModal} 
                onContinue={() => {/* Add any continue logic */}} 
              />
            )}
          </div>
        </div>
      )}

      {/* Rest of the existing SkillAssessment component remains the same */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 pr-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Skill Assessment</h1>
              <p className="text-gray-600">Test your skills and track your progress with our personalized assessments.</p>
            </div>

            <div className="flex space-x-4 mb-8">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Tailored for you</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">Technical Skills</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">Soft Skills</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">Domain Skills</button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Test your Marketing Fundamentals knowledge you just learned.</h2>
              <div className="space-y-4">
                {assessments.map((assessment, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm bg-${assessment.color}-100 text-${assessment.color}-600 mr-4`}>
                        {assessment.level}
                      </span>
                      <span className="font-semibold">{assessment.title}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-gray-600 text-sm text-center">
                        <div>Questions</div>
                        <div className="flex items-center gap-1">
                          <i className="bi bi-question-circle"></i>
                          {assessment.questions}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm text-center">
                        <div>Time</div>
                        <div className="flex items-center gap-1">
                          <i className="bi bi-clock"></i>
                          {assessment.time}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm text-center">
                        <div>Deadline</div>
                        <div className="flex items-center gap-1">
                          <i className="bi bi-calendar"></i>
                          {assessment.deadline}
                        </div>
                      </div>
                      <button 
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                        onClick={() => handleStartClick(index)}
                      >
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Test your knowledge for your Dream Jobs</h2>
              <div className="grid grid-cols-2 gap-6">
                {jobSkills.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      <i className="bi bi-chevron-right text-gray-600 text-xl"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-30">
            <Leaderboard />
            <Score />
            <TestsCompleted />
            <Goals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;