// import React, { useState } from 'react';
// import { FiClock, FiCheck, FiAward, FiBarChart2 } from 'react-icons/fi';
// import { PiTarget, PiBrain, PiChartLine, PiTrophy } from 'react-icons/pi';

// const SkillAssessment = () => {
//   const [selectedCategory, setSelectedCategory] = useState('featured');

//   const categories = [
//     { id: 'featured', label: 'Featured' },
//     { id: 'technical', label: 'Technical' },
//     { id: 'soft', label: 'Soft Skills' },
//     { id: 'domain', label: 'Domain' }
//   ];

//   const assessments = [
//     {
//       title: "React.js Advanced",
//       category: "technical",
//       duration: "45 mins",
//       questions: 30,
//       difficulty: "Advanced",
//       skills: ["Components", "Hooks", "Redux"],
//       level: "Level 3",
//       reward: "React Expert Badge",
//       thumbnail: "/api/placeholder/400/320"
//     },
//     {
//       title: "Communication Skills",
//       category: "soft",
//       duration: "30 mins",
//       questions: 25,
//       difficulty: "Intermediate",
//       skills: ["Verbal", "Written", "Presentation"],
//       level: "Level 2",
//       reward: "Effective Communicator Badge",
//       thumbnail: "/api/placeholder/400/320"
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" }}>
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header with Search */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-2xl font-bold mb-2">Skill Assessment</h1>
//             <p className="text-gray-600">Validate your expertise and earn certifications</p>
//           </div>
//           <div className="relative mt-8">
//             <input 
//               type="text"
//               placeholder="Search assessments..."
//               className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
//           </div>
//         </div>

//         {/* Category Selector */}
//         <div className="flex space-x-2 mb-8">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-2 rounded-full transition-all duration-200 ${
//                 selectedCategory === category.id 
//                 ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
//                 : 'bg-white text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {/* Assessment Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {assessments.map((assessment, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="h-48 bg-gray-200 relative">
//                 <img
//                   src={assessment.thumbnail}
//                   alt={assessment.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     assessment.difficulty === 'Advanced' 
//                     ? 'bg-purple-100 text-purple-800' 
//                     : 'bg-blue-100 text-blue-800'
//                   }`}>
//                     {assessment.difficulty}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{assessment.title}</h3>
                
//                 <div className="flex items-center text-gray-500 text-sm mb-4">
//                   <span className="flex items-center mr-4">
//                     <FiClock className="mr-1" />
//                     {assessment.duration}
//                   </span>
//                   <span>{assessment.questions} questions</span>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {assessment.skills.map((skill, i) => (
//                     <span 
//                       key={i}
//                       className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center text-gray-600">
//                     <FiAward className="mr-2 text-blue-500" />
//                     <span className="text-sm">{assessment.reward}</span>
//                   </div>
//                   <span className="text-sm font-medium text-purple-600">
//                     {assessment.level}
//                   </span>
//                 </div>

//                 <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02]">
//                   Start Assessment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Progress Section */}
//         <div className="mt-12">
//           <h2 className="text-xl font-bold mb-6">Your Progress</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-semibold">Technical Skills</h3>
//                 <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                   <PiBrain className="text-blue-600 text-xl" />
//                 </div>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//                 <div className="bg-blue-600 rounded-full h-2" style={{ width: '75%' }}></div>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-500">15/20 completed</span>
//                 <span className="text-blue-600 font-medium">75%</span>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-semibold">Soft Skills</h3>
//                 <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
//                   <PiTarget className="text-purple-600 text-xl" />
//                 </div>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//                 <div className="bg-purple-600 rounded-full h-2" style={{ width: '60%' }}></div>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-500">6/10 completed</span>
//                 <span className="text-purple-600 font-medium">60%</span>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-semibold">Domain Knowledge</h3>
//                 <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
//                   <PiChartLine className="text-green-600 text-xl" />
//                 </div>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//                 <div className="bg-green-600 rounded-full h-2" style={{ width: '45%' }}></div>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-500">9/20 completed</span>
//                 <span className="text-green-600 font-medium">45%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillAssessment;
import React from 'react';

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

  const leaderboardData = [
    { name: 'Akash Sharma', score: 980, image: 'https://storage.googleapis.com/a1aa/image/tu5TD7knzq5PL9s0uUrLQZE3Zyt5f9Ld8cil4AUF8vOiPVEKA.jpg' },
    { name: 'Yash', score: 972, image: 'https://storage.googleapis.com/a1aa/image/SFPZGIlyl77mL5FriBfGDp4N5Vx0UEOTtFqARqHSD04hPVEKA.jpg' },
    { name: 'Varun Chaudhary', score: 970, image: 'https://storage.googleapis.com/a1aa/image/xfn7JzBKSsWZASodECfsAeg7ky1nQ4ZHUqEAC8Qw3jxFepiQB.jpg' },
    { name: 'Om Rohilla', score: 966, image: 'https://storage.googleapis.com/a1aa/image/oqyw4viqr6LFBFYx6Ruf4iLteaxFP7MxrrUxBqhIcP8f9URoA.jpg' },
    { name: 'Prince', score: 959, image: 'https://storage.googleapis.com/a1aa/image/X0KmH0df003kD6zo517FNTIG7Rop8oipWF8gFk0VCNygPVEKA.jpg' }
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
          <div className="w-80">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
              <div className="space-y-4">
                {leaderboardData.map((leader, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm">{leader.name}</span>
                    </div>
                    <span className="text-blue-600 font-semibold">{leader.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Score */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <i className="bi bi-globe text-blue-600 text-xl"></i>
                <span className="text-blue-600 font-semibold text-2xl">742</span>
              </div>
              <h3 className="text-lg font-semibold">My Score</h3>
            </div>

            {/* Tests Completed */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <i className="bi bi-check2-all text-blue-600 text-xl"></i>
                <span className="text-blue-600 font-semibold text-2xl">12</span>
              </div>
              <h3 className="text-lg font-semibold">Tests Completed</h3>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-lg shadow p-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;