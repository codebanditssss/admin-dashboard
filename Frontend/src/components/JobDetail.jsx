import React, { useState } from 'react';
import { Heart } from 'lucide-react';

// InfoBox Component for Job Details
const InfoBox = ({ title, children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

// JobDetail Component
const JobDetail = ({ job }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left Column - Job Description */}
      <div className="col-span-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Digital Marketing Researcher</h2>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Full-Time</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Hybrid</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Fresher</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">About the Role</h3>
            <p className="text-gray-700">
              Join our dynamic team at Netflix, a leading player in the entertainment industry, 
              dedicated to delivering innovative solutions and exceptional customer experiences. 
              We are seeking a passionate and skilled Digital Marketing Specialist to drive our 
              online marketing efforts and help us reach new heights in digital engagement and 
              brand visibility.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Develop, implement, and manage digital marketing campaigns across various channels, including SEO/SEM, email, social media, and display advertising.</li>
              <li>Analyze and report on the performance of digital marketing campaigns, using data to optimize strategies and improve ROI.</li>
              <li>Stay up-to-date with the latest trends and best practices in digital marketing, applying innovative techniques to enhance our online presence.</li>
              <li>Manage and optimize the company's website and social media profiles to increase traffic and engagement.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proven experience in digital marketing, with a strong portfolio of successful campaigns.</li>
              <li>Proficiency in marketing tools and platforms, such as Google Ads, Facebook Ads Manager, and email marketing software.</li>
              <li>Excellent communication and collaboration skills, with the ability to work effectively in a team environment.</li>
              <li>Bachelor's degree in Marketing, Communications, or a related field is preferred.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Google Analytics</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">SEO & SEM</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Social Media Management</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Content Creation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Company and Job Info */}
      <div className="space-y-6">
        {/* Company Info Box */}
        <InfoBox title="About Netflix">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-700 mb-2"><strong>Founded:</strong> January, 1996</p>
              <p className="text-gray-700"><strong>Location:</strong> San Francisco, USA</p>
            </div>
            <img
              src="/api/placeholder/48/48"
              alt="Netflix logo"
              className="w-12 h-12"
            />
          </div>
        </InfoBox>

        {/* Job Info Box */}
        <InfoBox title="Job Information">
          <div className="space-y-2">
            <p className="text-gray-700"><strong>Applicants:</strong> 196</p>
            <p className="text-gray-700"><strong>Salary:</strong> ₹50,000/month</p>
            <p className="text-gray-700"><strong>Joining From:</strong> 12 February</p>
            <p className="text-gray-700"><strong>Job Location:</strong> Bengaluru, India</p>
          </div>
        </InfoBox>

        {/* Apply Button */}
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

// JobCard Component
const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <div 
      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${isSelected ? 'border-2 border-blue-500' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold">₹{job.salary}/month</span>
        <span className="text-blue-500 font-semibold">{job.match}% Match</span>
      </div>
      <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
      <div className="flex items-center mb-2">
        <img
          src="/api/placeholder/20/20"
          alt={`${job.company} logo`}
          className="w-5 h-5 mr-2"
        />
        <span>{job.company}</span>
      </div>
      <div className="text-gray-600 mb-2">
        <p><i className="fas fa-map-marker-alt mr-1"></i> {job.location}</p>
        <p><i className="fas fa-calendar-alt mr-1"></i> {job.date}</p>
        <p><i className="fas fa-users mr-1"></i> {job.applicants} Applicants</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Apply Now
      </button>
    </div>
  );
};

// Main JobMatches Component
const JobMatches = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const jobs = [
    {
      id: 1,
      salary: "50,000",
      match: 94,
      title: "Digital Marketing Researcher",
      company: "Netflix",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"]
    },
    {
      id: 2,
      salary: "50,000",
      match: 87,
      title: "Digital Marketing Researcher",
      company: "Netflix",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"]
    },
    {
      id: 3,
      salary: "35,000",
      match: 91,
      title: "Digital Marketing Researcher",
      company: "Blinkit",
      location: "Gurugram, India",
      date: "17 February",
      applicants: 82,
      tags: ["Full-Time", "Remote", "Fresher"]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm", paddingTop: "44px" }}>
      <div className="max-w-7xl mx-auto p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h1 className="text-3xl font-bold mb-2">Job Matches</h1>
        <p className="text-gray-600 mb-6">
          Discover opportunities that match your skills and preferences
        </p>
        
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            Best Matches
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
            Analytics
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
            Job Postings
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Job Cards */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                isSelected={index === selectedJob}
                onClick={() => setSelectedJob(index)}
              />
            ))}
          </div>
          
          {/* Right Column - Job Details */}
          <div className="col-span-2">
            <JobDetail job={jobs[selectedJob]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;