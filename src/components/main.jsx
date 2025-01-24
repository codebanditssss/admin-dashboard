import React from "react";
import { PiRocketLaunch, PiBrain, PiGraduationCap, PiTarget } from "react-icons/pi";
import { FiPlayCircle } from "react-icons/fi";
import { PiCheckCircle, PiClockLight } from "react-icons/pi";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { icon: <PiRocketLaunch className="text-blue-500 text-xl" />, value: "24", sublabel: "Learning Streak" },
    { icon: <PiBrain className="text-blue-500 text-xl" />, value: "5", sublabel: "Skills in Progress" },
    { icon: <PiGraduationCap className="text-blue-500 text-xl" />, value: "3", sublabel: "Certifications" },
    { icon: <PiTarget className="text-blue-500 text-xl" />, value: "86", sublabel: "Career Score" },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen" style={{ marginLeft: "7.9cm" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-xl font-medium mb-1">
            Welcome, Khushi Diwan! <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-gray-500 text-sm">You are making great progress, Keep up the Momentum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg ">
              <div className="flex items-center mb-2">
                {stat.icon}
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-0.5">{stat.value}</h2>
                <p className="text-gray-500 text-xs">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg  col-span-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Current Learning Path</h2>
              <a href="#" className="text-blue-500 hover:underline flex items-center text-xs">
                View all Courses <FaArrowRight className="ml-2 h-3 w-3" />
              </a>
            </div>

            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            {/* First Course */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <FiPlayCircle className="text-blue-500 text-lg" />
                <h3 className="text-sm font-medium">Advanced Digital Marketing</h3>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="text-gray-500 text-xs mb-0.5">78% Progress</p>
              <p className="text-gray-500 text-xs">Next: System Hooks Deep Dive • 2h 20m remaining</p>
            </div>

            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            {/* Second Course */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-0.5">
                <PiCheckCircle className="text-green-500 text-lg" />
                <h3 className="text-sm font-medium">Digital Marketing Fundamentals</h3>
              </div>
              <p className="text-gray-500 text-xs">Completed on 17/8/2024</p>
            </div>

            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            {/* Third Course */}
            <div className="mb-0.5">
              <div className="flex items-center space-x-2 mb-1">
                <PiClockLight className="text-gray-500 text-lg" />
                <h3 className="text-sm font-medium">Business Analyst</h3>
              </div>
              <p className="text-gray-500 text-xs">12 Lessons • 8 Hours</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg ">
            <h2 className="text-lg font-medium">Upcoming Deadlines</h2>
            
            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            <div className="bg-red-50 rounded-lg p-3 mb-3">
              <div className="flex items-center space-x-3">
                <LiaExclamationCircleSolid className="text-red-500 text-lg" />
                <div>
                  <h3 className="text-sm font-medium">React Assessment</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">19/02/2024</span>
                    <span className="text-xs text-gray-500">14:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 mb-3">
              <div className="flex items-center space-x-3">
                <LiaExclamationCircleSolid className="text-blue-500 text-lg" />
                <div>
                  <h3 className="text-sm font-medium">React Assessment</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">19/02/2024</span>
                    <span className="text-xs text-gray-500">14:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <LiaExclamationCircleSolid className="text-yellow-500 text-lg" />
                <div>
                  <h3 className="text-sm font-medium">React Assessment</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">19/02/2024</span>
                    <span className="text-xs text-gray-500">14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg ">
            <h2 className="text-lg font-medium">Skill Progresses</h2>
            
            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">React</h3>
                  <span className="text-gray-500 text-xs">Beginner</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">AWS</h3>
                  <span className="text-gray-500 text-xs">Intermediate</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">TypeScript</h3>
                  <span className="text-gray-500 text-xs">Intermediate</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Node.js</h3>
                  <span className="text-gray-500 text-xs">Advanced</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-medium">Career Goals</h2>

            <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

            <div className="mt-4">
              {/* Business Analyst Section */}
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Business Analyst</h3>
                  <div className="flex flex-col space-x-0">
                    <p className="text-gray-500 text-xs">TCS</p>
                    <div className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded-md inline-block">
                      85% Ready
                      </div>
                  </div>
                </div>
                <div className="flex flex-col  text-xs">
                  <p className="text-green-500">• React</p>
                  <p className="text-blue-500">• TypeScript</p>
                  <p className="text-gray-500">• System Design</p>
                </div>
              </div>

              <hr className="my-3 border-gray-300" style={{ borderWidth: "3px", borderColor: "#ccc" }} />

              {/* Digital Marketer Section */}
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Digital Marketer</h3>
                  <div className="flex flex-col space-x-0">
                    <p className="text-gray-500 text-xs">KPMG</p>
                    <div className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded-md ">72% Ready</div>
                  </div>
                </div>
                <div className="flex flex-col text-xs">
                  <p className="text-green-500">• Node.js</p>
                  <p className="text-blue-500">• AWS</p>
                  <p className="text-gray-500">• MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;