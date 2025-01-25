// import React, { useState } from 'react';
// import { 
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   RadarChart, PolarGrid, PolarAngleAxis, Radar,
//   CircularProgressbar, buildStyles 
// } from 'recharts';
// import { FiPlay, FiClock, FiAward, FiBook, FiTarget, FiTrendingUp } from 'react-icons/fi';
// import { PiCertificate, PiBrain, PiLightbulb, PiTarget } from 'react-icons/pi';

// const TrainingModules = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Simulated data
//   const learningStats = {
//     hoursSpent: 125,
//     coursesCompleted: 15,
//     certificatesEarned: 8,
//     currentStreak: 23
//   };

//   const recommendedPaths = [
//     {
//       title: "Full Stack Development",
//       level: "Advanced",
//       duration: "12 weeks",
//       completion: 65,
//       skills: ["React", "Node.js", "MongoDB"],
//       enrolled: 1234,
//       rating: 4.8,
//       thumbnail: "/api/placeholder/400/320"
//     },
//     {
//       title: "Cloud Architecture",
//       level: "Intermediate",
//       duration: "8 weeks",
//       completion: 30,
//       skills: ["AWS", "Azure", "DevOps"],
//       enrolled: 987,
//       rating: 4.9,
//       thumbnail: "/api/placeholder/400/320"
//     }
//   ];

//   const learningActivities = [
//     {
//       date: "Monday",
//       hours: 3.5,
//       completion: 85,
//       focus: 90
//     },
//     {
//       date: "Tuesday",
//       hours: 2.8,
//       completion: 75,
//       focus: 85
//     },
//     {
//       date: "Wednesday",
//       hours: 4.2,
//       completion: 95,
//       focus: 88
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" , paddingTop: "44px"}}>
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Hero Section with 3D Card Effect */}
//         <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 transform hover:-translate-y-1 transition-all shadow-xl">
//           <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
//             <div className="w-full h-full bg-white transform rotate-45"></div>
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">Welcome to Your Learning Journey</h1>
//           <p className="text-blue-100 mb-6">Continue your path to mastery</p>
//           <div className="grid grid-cols-4 gap-4">
//             {Object.entries(learningStats).map(([key, value]) => (
//               <div key={key} className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
//                 <div className="text-2xl font-bold text-white mb-1">{value}</div>
//                 <div className="text-blue-100 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <FiBook className="absolute left-4 top-3.5 text-gray-400 text-xl" />
//             </div>
//             <div className="flex gap-2">
//               {['All', 'In Progress', 'Completed', 'Bookmarked'].map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category.toLowerCase())}
//                   className={`px-4 py-2 rounded-xl transition-all ${
//                     selectedCategory === category.toLowerCase()
//                       ? 'bg-blue-500 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Learning Progress Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//           {/* Activity Chart */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Learning Activity</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={learningActivities}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line 
//                   type="monotone" 
//                   dataKey="hours" 
//                   stroke="#3B82F6" 
//                   strokeWidth={2}
//                   dot={{ r: 4 }}
//                   activeDot={{ r: 8 }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="completion" 
//                   stroke="#10B981" 
//                   strokeWidth={2}
//                   dot={{ r: 4 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Skill Radar */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Skill Progress</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <RadarChart data={[
//                 { subject: 'React', A: 85 },
//                 { subject: 'Node.js', A: 70 },
//                 { subject: 'DevOps', A: 60 },
//                 { subject: 'AWS', A: 75 },
//                 { subject: 'Python', A: 80 }
//               ]}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="subject" />
//                 <Radar 
//                   name="Skills" 
//                   dataKey="A" 
//                   stroke="#3B82F6" 
//                   fill="#3B82F6" 
//                   fillOpacity={0.5} 
//                 />
//               </RadarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Course Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {recommendedPaths.map((path, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={path.thumbnail}
//                   alt={path.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600">
//                     {path.level}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{path.title}</h3>
//                 <div className="flex items-center mb-4">
//                   <FiClock className="text-gray-400 mr-2" />
//                   <span className="text-gray-600 text-sm">{path.duration}</span>
//                   <span className="mx-2">•</span>
//                   <FiTarget className="text-gray-400 mr-2" />
//                   <span className="text-gray-600 text-sm">{path.enrolled} enrolled</span>
//                   <span className="mx-2">•</span>
//                   <span className="text-yellow-500">★</span>
//                   <span className="text-gray-600 text-sm ml-1">{path.rating}</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {path.skills.map((skill, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="w-48">
//                     <div className="bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="bg-blue-500 rounded-full h-2"
//                         style={{ width: `${path.completion}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-sm text-gray-500">{path.completion}% completed</span>
//                   </div>
//                   <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//                     <FiPlay className="mr-2" />
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Achievement Showcase */}
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-6">Your Achievements</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[...Array(4)].map((_, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
//                   <FiAward className="text-2xl text-blue-500" />
//                 </div>
//                 <h3 className="font-bold mb-1">Achievement {index + 1}</h3>
//                 <p className="text-sm text-gray-500">Completed advanced course</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainingModules;

import React from 'react';
import { FiClock, FiChevronRight } from 'react-icons/fi';

const CareerPaths = () => {
  const careerPaths = [
    {
      title: "Digital Marketing",
      description: "Digital Marketing is the use of digital channels to promote products, services, or brands to targeted audience.",
      duration: "6 Months",
      skills: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Content Marketing", "Social Media Marketing"],
      technicalSkills: ["Marketing Automation", "Web Design Basics", "Graphic Designing", "Video Editing"]
    },
    {
      title: "Business Analyst",
      description: "Business Analyst are the professionals who analyze business processes and recommend solutions to improve eff...",
      duration: "8 Months",
      skills: ["Data Analysis and Interpretation", "Search Engine Marketing (SEM)", "Agile Methodology", "Waterfall Model"],
      technicalSkills: ["SQL and Database Knowledge", "Basic Programming", "Tools and Software Proficiency", "Understanding APIs", "ERP Systems"]
    }
  ];

  const recommendedCourses = [
    {
      title: "Business Analyst",
      duration: "8 Weeks",
      level: "Beginner",
      skills: ["SQL and Database Knowledge", "Basic Programming"]
    },
    {
      title: "Business Analyst",
      duration: "3 Weeks",
      level: "Advanced",
      skills: ["SQL and Database Knowledge", "Basic Programming"]
    },
    {
      title: "Business Analyst",
      duration: "8 Weeks",
      level: "Beginner",
      skills: ["SQL and Database Knowledge", "Basic Programming"]
    },
    {
      title: "Business Analyst",
      duration: "3 Weeks",
      level: "Advanced",
      skills: ["SQL and Database Knowledge", "Basic Programming"]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm", paddingTop: "44px" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Your Career Paths</h1>
          <p className="text-gray-600">You are making great progress, Keep up the Momentum.</p>
        </div>

        <div className="space-y-6 mb-8">
          {careerPaths.map((career, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{career.title}</h2>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <FiClock className="mr-2" />
                  <span>{career.duration}</span>
                  <FiChevronRight className="ml-2" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {career.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                    {skill}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">...</span>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technical Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {career.technicalSkills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center text-gray-500 mb-3 text-sm">
                  <FiClock className="mr-1" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.level}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;