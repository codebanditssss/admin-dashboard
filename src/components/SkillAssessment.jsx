import React, { useState, useMemo } from 'react';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import Leaderboard from './leaderboard';
import Score from './Score'; 
import TestsCompleted from './TestsCompleted';
import Goals from './Goals';

const SkillAssessment = () => { 
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
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Start</button>
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

          {/* Right Sidebar */}
        
          <div className="w-30">
            {/* Leaderboard */}
            <Leaderboard />
             

            {/* My Score */}
            {/* <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <i className="bi bi-globe text-blue-600 text-xl"></i>
                <span className="text-blue-600 font-semibold text-2xl">742</span>
              </div>
              <h3 className="text-lg font-semibold">My Score</h3>
            </div> */}
            <Score />

            {/* Tests Completed */}
            {/* <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <i className="bi bi-check2-all text-blue-600 text-xl"></i>
                <span className="text-blue-600 font-semibold text-2xl">12</span>
              </div>
              <h3 className="text-lg font-semibold">Tests Completed</h3>
            </div> */}
            <TestsCompleted />

            {/* Goals */}
            {/* <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4">Goals</h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <i className="bi bi-rocket text-blue-600 text-2xl"></i>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Daily Goal: 7/30 Learning Days</p>
                <p className="text-gray-600 text-sm">Longest Streak: 21 Days</p>
              </div>
            </div> */}
            <Goals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;