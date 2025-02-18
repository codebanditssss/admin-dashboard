import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I get started with learning?",
      answer: "Begin by completing your profile and taking the initial skill assessment. This will help us personalize your learning path and recommend suitable resources."
    },
    {
      id: 2,
      question: "What should I focus on first?",
      answer: "Start with the fundamentals of your chosen field. Complete the beginner challenges and follow the recommended learning path tailored to your goals."
    },
    {
      id: 3,
      question: "How are skill scores calculated?",
      answer: "Skill scores are based on your performance in assessments, completed challenges, and consistent learning activity. Regular practice improves your score."
    },
    {
      id: 4,
      question: "Can I track my progress?",
      answer: "Yes! Use the milestone tracker and progress dashboard to monitor your learning journey. You can also earn badges for completing various achievements."
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Frequently Asked Questions</h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <span className="font-medium">{faq.question}</span>
              {openQuestion === faq.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openQuestion === faq.id && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <a 
          href="#" 
          className="text-sm text-blue-600 hover:underline"
        >
          View all FAQs
        </a>
      </div>
    </div>
  );
};

export default FAQSection;