import React, { useState } from 'react';
import { FiSearch, FiHelpCircle, FiBook, FiMessageCircle, FiVideo } from 'react-icons/fi';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <FiBook className="text-blue-500 text-2xl" />,
      articles: [
        "Platform Overview",
        "Account Setup",
        "Navigation Guide"
      ]
    },
    {
      title: "Course Access",
      icon: <FiVideo className="text-green-500 text-2xl" />,
      articles: [
        "Accessing Materials",
        "Download Resources",
        "Technical Requirements"
      ]
    },
    {
      title: "Support",
      icon: <FiMessageCircle className="text-purple-500 text-2xl" />,
      articles: [
        "Contact Support",
        "Report Issues",
        "Feedback System"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-4">How can we help you?</h1>
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-xl font-bold ml-3">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.articles.map((article, i) => (
                  <li key={i} className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
                    <FiHelpCircle className="mr-2" />
                    {article}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                  <span className="font-medium">Common Question {index + 1}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 px-4 text-gray-600">
                  Detailed answer to the question goes here. This provides comprehensive information about the topic.
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-4">Our support team is available 24/7 to assist you</p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Contact Us
              </button>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Submit Feedback</h3>
              <p className="text-gray-600 mb-4">Help us improve your learning experience</p>
              <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;