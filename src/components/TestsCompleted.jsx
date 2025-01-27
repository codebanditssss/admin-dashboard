import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TestDetailsModal from './TestDetailsModal';

const TestsCompleted = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const completedTests = [
    {
      id: 1,
      name: "Advanced Digital Marketing",
      dateCompleted: "2024-01-15",
      score: 85,
      stateRank: 25,
      totalStateParticipants: 1200,
      countryRank: 742,
      totalCountryParticipants: 50000,
      skillScores: {
        'SEO': 90,
        'Content Marketing': 85,
        'Social Media': 82,
        'Analytics': 88,
        'Email Marketing': 80
      },
      progressData: [
        { date: '2023-11', score: 65 },
        { date: '2023-12', score: 75 },
        { date: '2024-01', score: 85 }
      ],
      feedback: {
        strengths: [
          "Excellent understanding of SEO principles",
          "Strong analytics interpretation skills"
        ],
        improvements: [
          "Focus on advanced email marketing techniques",
          "Enhance social media strategy skills"
        ]
      },
      recommendations: [
        {
          title: "Advanced Social Media Marketing",
          description: "Deep dive into platform-specific strategies and analytics"
        },
        {
          title: "Email Marketing Mastery",
          description: "Learn advanced automation and segmentation techniques"
        }
      ]
    }
    // Add more test data as needed
  ];

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <CheckCircle2 className="text-blue-600 text-xl" />
          <span className="text-blue-600 font-semibold text-2xl">{completedTests.length}</span>
        </div>
        <h3 className="text-lg font-semibold mb-4">Tests Completed</h3>
        
        {/* Quick List of Recent Tests */}
        <div className="space-y-2">
          {completedTests.map(test => (
            <div 
              key={test.id}
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              onClick={() => handleTestClick(test)}
            >
              <div>
                <h4 className="font-medium text-sm">{test.name}</h4>
                <p className="text-xs text-gray-500">{test.dateCompleted}</p>
              </div>
              <span className="text-blue-600 font-medium">{test.score}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Test Details Modal */}
      {showModal && selectedTest && (
        <TestDetailsModal 
          test={selectedTest}
          onClose={() => {
            setShowModal(false);
            setSelectedTest(null);
          }}
        />
      )}
    </>
  );
};

export default TestsCompleted;