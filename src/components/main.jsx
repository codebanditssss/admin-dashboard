import React from "react";
import { FaBell, FaFire, FaTrophy, FaGraduationCap, FaGlobe, FaCalendarAlt, FaExclamationCircle, FaArrowRight } from "react-icons/fa";
import "./main.css";
import RocketImage from "../images/rocket.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container flex">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, Khushi Diwan!
              <span className="wave">👋</span>
            </h1>
            <p className="text-gray-600">You are making great progress. Keep up the momentum!</p>
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>

        {/* Stats Section */}
        {/* Stats Section */}
        <div className="flex justify-between mt-6">
        {[
            { icon: <FaFire className="text-blue-600 text-3xl" />, value: 5, label: "Learning Streak", bgColor: "bg-green-100" },
            { icon: <FaTrophy className="text-blue-600 text-3xl" />, value: 5, label: "Skills in Progress", bgColor: "bg-green-100" },
            { icon: <FaGraduationCap className="text-blue-600 text-3xl" />, value: 3, label: "Certifications", bgColor: "bg-purple-100" },
            { icon: <FaGlobe className="text-blue-600 text-3xl" />, value: 86, label: "Career Score", bgColor: "bg-yellow-100" },
        ].map((stat, index) => (
            <div key={index} className={`flex items-center p-6 rounded-lg shadow-md ${stat.bgColor} w-1/4`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                {stat.icon}
            </div>
            <div className="ml-4">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
            </div>
            </div>
        ))}
        </div>




        {/* Current Learning Path */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md learning-path-box">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Current Learning Path</h2>
              <a className="text-blue-600 flex items-center" href="#">
                View all Courses <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Advanced Digital Marketing</h3>
                <span className="text-blue-600">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="text-gray-600 mt-2">Next: Custom Hooks Deep Dive • 2h 30m remaining</p>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Upcoming Deadlines</h2>
            {["red", "blue", "yellow"].map((color, index) => (
              <div key={index} className={`flex items-center justify-between p-4 bg-${color}-100 rounded-lg mt-4`}>
                <div>
                  <h3 className="font-semibold">React Assessment</h3>
                  <p className="text-gray-600">
                    <FaCalendarAlt className="inline mr-2" />
                    19/20/2024 • 14:00
                  </p>
                </div>
                <FaExclamationCircle className={`text-${color}-600`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
