import React from 'react';
import { Users, MessageSquare, Calendar, Star } from 'lucide-react';

const PeerMentorship = () => {
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      specialties: ['React', 'Node.js', 'System Design'],
      rating: 4.9,
      availability: 'Available Now',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Tech Lead',
      specialties: ['Architecture', 'Python', 'AWS'],
      rating: 4.8,
      availability: 'Next slot: Tomorrow',
      image: '/api/placeholder/100/100'
    }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Mentorship Program</h3>
          <p className="text-sm text-gray-500">Connect with experienced developers</p>
        </div>
        <Users className="text-blue-600 w-5 h-5" />
      </div>

      <div className="space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
            <div className="flex items-start gap-4">
              <img 
                src={mentor.image}
                alt={mentor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{mentor.name}</h4>
                    <p className="text-sm text-gray-500">{mentor.role}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm ml-1">{mentor.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mentor.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-green-600">{mentor.availability}</span>
                  <div className="space-x-2">
                    <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                      View Profile
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Request Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full p-2 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50">
        View All Mentors
      </button>
    </div>
  );
};

export default PeerMentorship;