import React, { useState, useEffect } from 'react';
import { Quote, User, RefreshCw } from 'lucide-react';

const MotivationWidget = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      role: "Tech Visionary"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      role: "Leader"
    },
    {
      text: "Learning is not attained by chance, it must be sought for with ardor and diligence.",
      author: "Abigail Adams",
      role: "Educator"
    }
  ];

  const successStories = [
    {
      name: "Alex Chen",
      achievement: "Went from beginner to senior developer in 2 years",
      tip: "Focus on building real projects",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Sarah Johnson",
      achievement: "Landed dream job after 6 months of focused learning",
      tip: "Consistency is key",
      image: "/api/placeholder/100/100"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Quote Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <Quote className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <p className="text-gray-700 italic mb-2">{quotes[currentQuote].text}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-medium">{quotes[currentQuote].author}</p>
                <p className="text-gray-500">{quotes[currentQuote].role}</p>
              </div>
              <button 
                onClick={() => setCurrentQuote((prev) => (prev + 1) % quotes.length)}
                className="p-1 hover:bg-blue-100 rounded-full"
              >
                <RefreshCw className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h3 className="font-semibold mb-3">Success Stories</h3>
        <div className="space-y-4">
          {successStories.map((story, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{story.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{story.achievement}</p>
                <div className="flex items-center gap-1 text-sm text-blue-600">
                  <User className="w-4 h-4" />
                  <span>Pro Tip: {story.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotivationWidget;