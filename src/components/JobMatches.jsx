import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">₹{job.salary}/month</span>
        <span className="text-blue-600 font-semibold">{job.match}% Match</span>
      </div>
      <h3 className="text-lg font-bold mt-2">{job.title}</h3>
      <div className="flex items-center mt-2">
        <img
          src="/api/placeholder/20/20"
          alt={`${job.company} logo`}
          className="w-5 h-5 mr-2"
        />
        <span>{job.company}</span>
      </div>
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <i className="fas fa-map-marker-alt mr-2"></i>
        <span>{job.location}</span>
      </div>
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <i className="fas fa-calendar-alt mr-2"></i>
        <span>{job.date}</span>
      </div>
      <div className="text-gray-600 text-sm mt-2">
        {job.applicants} Applicants
      </div>
      <div className="flex mt-4">
        {job.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded mr-2">
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded">
        Apply Now
      </button>
      <button className="w-full mt-2 py-2 border border-gray-300 rounded">
        <Heart className="mx-auto" />
      </button>
    </div>
  );
};

const JobMatches = () => {
  const [filters, setFilters] = useState({
    workSchedule: new Set(),
    salaryRange: 50000,
    employmentType: new Set(),
    workStyle: new Set()
  });

  const jobs = [
    {
      salary: "50000",
      match: 94,
      title: "Digital Marketing Researcher",
      company: "Netflix",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Hybrid"
    },
    {
      salary: "52000",
      match: 91,
      title: "Product Analyst",
      company: "Blinkit",
      location: "Gurugram, India",
      date: "17 February",
      applicants: 82,
      tags: ["Full-Time", "Remote", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Remote"
    },
    {
      salary: "55000",
      match: 90,
      title: "Content Marketing Specialist",
      company: "Zomato",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Flexible Schedule",
      workStyle: "Hybrid"
    },
    {
      salary: "55000",
      match: 87,
      title: "Influencer Marketing Manager",
      company: "Netflix",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Hybrid"
    },
    {
      salary: "70000",
      match: 83,
      title: "IT Business Analyst",
      company: "Netflix",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Hybrid"
    },
    {
      salary: "74000",
      match: 80,
      title: "Email Marketing Specialist",
      company: "PhonePe",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Hybrid"
    },
    {
      salary: "75000",
      match: 80,
      title: "Supply Chain Analyst",
      company: "Apple",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Office"
    },
    {
      salary: "59000",
      match: 79,
      title: "Business Analyst",
      company: "Company",
      location: "Bengaluru, India",
      date: "12 February",
      applicants: 196,
      tags: ["Full-Time", "Hybrid", "Fresher"],
      workSchedule: "Full-Time",
      employmentType: "Full Day",
      workStyle: "Hybrid"
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (filterType === 'salaryRange') {
        newFilters.salaryRange = value;
      } else {
        const filterSet = new Set(prevFilters[filterType]);
        if (filterSet.has(value)) {
          filterSet.delete(value);
        } else {
          filterSet.add(value);
        }
        newFilters[filterType] = filterSet;
      }
      return newFilters;
    });
  };

  const handleResetFilters = () => {
    setFilters({
      workSchedule: new Set(),
      salaryRange: 50000,
      employmentType: new Set(),
      workStyle: new Set()
    });
  };

  const filteredJobs = jobs.filter(job => {
    // Check salary range
    if (parseInt(job.salary) < filters.salaryRange) {
      return false;
    }

    // Check work schedule
    if (filters.workSchedule.size > 0 && !filters.workSchedule.has(job.workSchedule)) {
      return false;
    }

    // Check employment type
    if (filters.employmentType.size > 0 && !filters.employmentType.has(job.employmentType)) {
      return false;
    }

    // Check work style
    if (filters.workStyle.size > 0 && !filters.workStyle.has(job.workStyle)) {
      return false;
    }

    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm", paddingTop: "44px" }}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Job Matches</h1>
        <p className="text-gray-600">
          Discover opportunities that match your skills and preferences
        </p>
        
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded">
            Best Matches
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Analytics
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Job Postings
          </button>
        </div>

        <div className="flex mt-6" style={{ minHeight: "calc(100vh - 200px)" }}>
          {/* Filters Section */}
          <div className="w-1/4 bg-white p-4 rounded shadow h-fit">
            <h2 className="text-lg font-bold">Filters</h2>
            <button 
              className="text-blue-600 text-sm mt-2"
              onClick={handleResetFilters}
            >
              Reset All
            </button>
            
            {/* Work Schedule */}
            <div className="mt-4">
              <h3 className="font-semibold">Work Schedule</h3>
              <div className="mt-2">
                {["Full-Time", "Part-Time", "Internship", "Project Work", "Volunteering"].map((option) => (
                  <label key={option} className="block">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={filters.workSchedule.has(option)}
                      onChange={() => handleFilterChange('workSchedule', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div className="mt-4">
              <h3 className="font-semibold">Salary Range</h3>
              <div className="mt-2">
                <input
                  type="range"
                  min="50000"
                  max="75000"
                  className="w-full"
                  value={filters.salaryRange}
                  onChange={(e) => handleFilterChange('salaryRange', parseInt(e.target.value))}
                />
                <div className="flex justify-between text-sm">
                  <span>50,000 ₹</span>
                  <span>75,000 ₹</span>
                </div>
              </div>
            </div>

            {/* Employment Type */}
            <div className="mt-4">
              <h3 className="font-semibold">Employment Type</h3>
              <div className="mt-2">
                {["Full Day", "Flexible Schedule", "Shift Work", "Distant Work"].map((option) => (
                  <label key={option} className="block">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={filters.employmentType.has(option)}
                      onChange={() => handleFilterChange('employmentType', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Work Style */}
            <div className="mt-4">
              <h3 className="font-semibold">Work Style</h3>
              <div className="mt-2">
                {["Office", "Hybrid", "Remote"].map((option) => (
                  <label key={option} className="block">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={filters.workStyle.has(option)}
                      onChange={() => handleFilterChange('workStyle', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="w-3/4 grid grid-cols-3 gap-4 ml-4 h-fit">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;