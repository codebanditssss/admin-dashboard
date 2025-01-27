import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, Link as LinkIcon } from 'lucide-react';

const ResourceHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      type: "article",
      duration: "10 min read",
      difficulty: "Beginner",
      link: "#"
    },
    {
      id: 2,
      title: "HTML & CSS Basics Tutorial",
      type: "video",
      duration: "15 mins",
      difficulty: "Beginner",
      link: "#"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals Guide",
      type: "guide",
      duration: "30 min read",
      difficulty: "Beginner",
      link: "#"
    }
  ];

  const filteredResources = resources.filter(resource => 
    (selectedType === 'all' || resource.type === selectedType) &&
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIcon = (type) => {
    switch(type) {
      case 'article': return <FileText className="w-4 h-4 text-blue-600" />;
      case 'video': return <Video className="w-4 h-4 text-red-600" />;
      case 'guide': return <BookOpen className="w-4 h-4 text-green-600" />;
      default: return <LinkIcon className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'all' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedType('article')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'article' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setSelectedType('video')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'video' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setSelectedType('guide')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'guide' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Guides
          </button>
        </div>
      </div>

      {/* Resource List */}
      <div className="space-y-3">
        {filteredResources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            className="block p-4 bg-white rounded-lg border hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                {getIcon(resource.type)}
                <div>
                  <h4 className="font-medium mb-1">{resource.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{resource.duration}</span>
                    <span>•</span>
                    <span>{resource.difficulty}</span>
                  </div>
                </div>
              </div>
              <LinkIcon className="w-4 h-4 text-gray-400" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceHub;