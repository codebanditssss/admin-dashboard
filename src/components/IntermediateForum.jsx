import React from 'react';
import { MessageSquare, ThumbsUp, Eye, Clock } from 'lucide-react';

const IntermediateForum = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for React Performance Optimization",
      author: "Sarah K.",
      responses: 15,
      views: 234,
      likes: 45,
      timeAgo: "2h ago",
      tags: ["React", "Performance"]
    },
    {
      id: 2,
      title: "Implementing Microservices Architecture",
      author: "Mike Chen",
      responses: 23,
      views: 312,
      likes: 67,
      timeAgo: "4h ago",
      tags: ["Architecture", "Backend"]
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Discussion Forum</h3>
          <p className="text-sm text-gray-500">Connect with other learners</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
          New Discussion
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="border rounded-lg p-4 hover:border-blue-300 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-medium">{discussion.title}</h4>
              <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {discussion.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>by {discussion.author}</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {discussion.responses}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {discussion.views}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {discussion.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm">
        View All Discussions
      </button>
    </div>
  );
};

export default IntermediateForum;