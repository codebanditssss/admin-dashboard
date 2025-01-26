import React, { useState, useMemo } from 'react';
import { Trophy, Crown, Filter, ChevronDown, ChevronUp } from 'lucide-react';

// Dummy data with more detailed user information
const leaderboardData = [
  { 
    id: 1,
    name: 'Khushi', 
    score: 980, 
    rank: 1,
    image: 'https://randomuser.me/api/portraits/women/1.jpg', 
    skills: ['Digital Marketing', 'SEO', 'Analytics', 'Social Media Marketing'],
    industry: 'Marketing',
    progressToNextRank: 75
  },
  { 
    id: 2,
    name: 'Sangita', 
    score: 972, 
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rank: 2,
    skills: ['Business Analysis', 'Data Visualization', 'Strategic Planning'],
    industry: 'Consulting',
    progressToNextRank: 60
  },
  { 
    id: 3,
    name: 'Varun', 
    score: 970, 
    image: 'https://storage.googleapis.com/a1aa/image/xfn7JzBKSsWZASodECfsAeg7ky1nQ4ZHUqEAC8Qw3jxFepiQB.jpg',
    rank: 3,
    skills: ['Digital Marketing', 'Content Strategy', 'Paid Advertising'],
    industry: 'Marketing',
    progressToNextRank: 50
  },
  { 
    id: 4,
    name: 'Om', 
    score: 966, 
    image: 'https://storage.googleapis.com/a1aa/image/oqyw4viqr6LFBFYx6Ruf4iLteaxFP7MxrrUxBqhIcP8f9URoA.jpg',
    rank: 4,
    skills: ['Business Analysis', 'Project Management', 'Data Analytics'],
    industry: 'Finance',
    progressToNextRank: 45
  },
  { 
    id: 5,
    name: 'Punit', 
    score: 959, 
    image: 'https://storage.googleapis.com/a1aa/image/X0KmH0df003kD6zo517FNTIG7Rop8oipWF8gFk0VCNygPVEKA.jpg',
    rank: 5,
    skills: ['Digital Marketing', 'Social Media Management', 'Content Creation'],
    industry: 'Media',
    progressToNextRank: 40
  }
];

const Leaderboard = () => {
  const [expandedUser, setExpandedUser] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('rank');
  const [skillFilter, setSkillFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [selectedProfileUser, setSelectedProfileUser] = useState(null);

  // Filters and sorts leaderboard data
  const filteredLeaderboard = useMemo(() => {
    return leaderboardData
      .filter(user => 
        (!skillFilter || user.skills.some(skill => 
          skill.toLowerCase().includes(skillFilter.toLowerCase())
        )) &&
        (!industryFilter || user.industry.toLowerCase() === industryFilter.toLowerCase())
      )
      .sort((a, b) => {
        switch(sortCriteria) {
          case 'score': return b.score - a.score;
          case 'skills': return b.skills.length - a.skills.length;
          default: return a.rank - b.rank;
        }
      });
  }, [sortCriteria, skillFilter, industryFilter]);

  // Profile Details Modal
  const ProfileModal = ({ user, onClose }) => {
    const uniqueSkillsCount = leaderboardData.filter(u => 
      u.id !== user.id && u.skills.some(skill => user.skills.includes(skill))
    ).length;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Profile Details</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
              ✕
            </button>
          </div>
          <div className="flex items-center mb-4">
            <img 
              src={user.image} 
              alt={user.name} 
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">Rank {user.rank}</p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            This person has {uniqueSkillsCount}% more chances than you to get hired by a company 
            with these skills.
          </p>
          <div className="bg-gray-100 rounded-lg p-3 mt-4">
            <p className="text-sm text-gray-600">
              Industry: {user.industry}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-96 mb-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      
      {/* Filtering and Sorting Controls */}
      <div className="flex space-x-2 mb-4">
        <select 
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="w-1/3 p-2 border rounded"
        >
          <option value="rank">Rank</option>
          <option value="score">Score</option>
          <option value="skills">Skills</option>
        </select>
        
        <input 
          type="text"
          placeholder="Filter Skill"
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
          className="flex-grow border rounded p-2"
        />
        
        <select 
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="w-1/3 border rounded p-2"
        >
          <option value="">All</option>
          <option value="Marketing">Marketing</option>
          <option value="Consulting">Consulting</option>
          <option value="Finance">Finance</option>
          <option value="Media">Media</option>
        </select>
      </div>

      {/* Leaderboard */}
      <div className="space-y-2">
        {filteredLeaderboard.map((user) => (
          <div 
            key={user.id} 
            className="bg-gray-50 rounded-lg p-3 transition-all duration-300 ease-in-out"
          >
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
            >
              <div className="flex items-center space-x-2">
                {user.rank === 1 && <Crown className="text-yellow-500 w-5 h-5" />}
                {user.rank === 2 && <Crown className="text-orange-500 w-5 h-5" />}
                {user.rank === 3 && <Crown className="text-gray-400 w-5 h-5" />}
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">{user.name}</h3>
                  <p className="text-gray-600 text-xs">Rank {user.rank}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="font-bold text-blue-600 text-sm">{user.score}</span>
                {expandedUser === user.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>
            
            {/* Expandable User Details */}
            {expandedUser === user.id && (
              <div className="mt-2 p-3 bg-gray-100 rounded-lg text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Industry:</span> {user.industry}
                  </p>
                  <div>
                    <span className="font-medium">Skills:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {user.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProfileUser(user)}
                    className="mt-2 w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 text-xs"
                  >
                    View Full Profile
                  </button>
                </div>
            )}
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedProfileUser && (
        <ProfileModal 
          user={selectedProfileUser}
          onClose={() => setSelectedProfileUser(null)}
        />
      )}
    </div>
  );
};

export default Leaderboard;