import React, { useState, useEffect } from 'react';

const CompleteProfileModal = ({ isOpen, onClose, onSubmit }) => {
  const [activeStep, setActiveStep] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'Male',
    dateOfBirth: '',
    state: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isLongEnough: false
  });

  // Add certifications array state
  const [certifications, setCertifications] = useState(['']);

  // Add skills and interests state
  const [keySkills, setKeySkills] = useState(['Skill 1']);
  const [areasOfInterest, setAreasOfInterest] = useState(['Job Interest 1']);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  // Add location preference state
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [relocateWillingness, setRelocateWillingness] = useState(null);

  // Add additional info state
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [isAvailableImmediately, setIsAvailableImmediately] = useState(null);
  const [languages, setLanguages] = useState(['English']);

  // Add work experience state
  const [workExperiences, setWorkExperiences] = useState([]);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [currentWorkExperience, setCurrentWorkExperience] = useState({
    jobTitle: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    description: ''
  });

  // Update work experience state to handle document uploads instead of manual entry
  const [workExperienceDoc, setWorkExperienceDoc] = useState(null);
  const [workExperienceDocName, setWorkExperienceDocName] = useState('');

  // Add resume document state
  const [resumeDoc, setResumeDoc] = useState(null);
  const [resumeDocName, setResumeDocName] = useState('');

  // Add profile picture state
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", 
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Lakshadweep", "Puducherry"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to limit to 10 digits
    if (name === 'phone') {
      // Only allow digits and limit to 10 characters
      const phoneValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: phoneValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Email validation in real-time
    if (name === 'email') {
      if (!value.trim()) {
        setErrors(prev => ({
          ...prev,
          email: 'Email is required'
        }));
      } else if (!validateEmail(value)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          email: ''
        }));
      }
    } 
    // Clear other errors when user starts typing
    else if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Password strength check
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    let score = 0;
    if (hasLowerCase) score += 1;
    if (hasUpperCase) score += 1;
    if (hasNumber) score += 1;
    if (hasSpecialChar) score += 1;
    if (isLongEnough) score += 1;

    setPasswordStrength({
      score,
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      hasSpecialChar,
      isLongEnough
    });
  };

  const getPasswordStrengthLabel = () => {
    const { score } = passwordStrength;
    if (score === 0) return { label: 'Very Weak', color: 'red-500' };
    if (score === 1) return { label: 'Weak', color: 'red-500' };
    if (score === 2) return { label: 'Fair', color: 'yellow-500' };
    if (score === 3) return { label: 'Good', color: 'blue-500' };
    if (score === 4) return { label: 'Strong', color: 'green-500' };
    if (score === 5) return { label: 'Very Strong', color: 'green-600' };
    return { label: 'None', color: 'gray-400' };
  };

  const validateEmail = (email) => {
    // Improved email regex pattern
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    
    // Validate state
    if (!formData.state) newErrors.state = 'Please select a state';
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (passwordStrength.score < 3) {
      newErrors.password = 'Password is too weak';
    }
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (activeStep === 'personal') {
      if (!validateForm()) {
        return;
      }
      setActiveStep('educational');
    } else if (activeStep === 'educational') {
      setActiveStep('skills');
    } else if (activeStep === 'skills') {
      setActiveStep('experience');
    } else if (activeStep === 'experience') {
      setActiveStep('resume');
    } else if (activeStep === 'resume') {
      setActiveStep('location');
    } else if (activeStep === 'location') {
      setActiveStep('photo');
    } else if (activeStep === 'photo') {
      setActiveStep('additional');
    } else {
      onSubmit(formData);
      onClose();
    }
  };

  const steps = [
    { id: 'personal', label: 'Personal Details' },
    { id: 'educational', label: 'Educational Background' },
    { id: 'skills', label: 'Showcase Your Skills' },
    { id: 'experience', label: 'Share your Work Experience' },
    { id: 'resume', label: 'Upload your Resume' },
    { id: 'location', label: 'Location Preference' },
    { id: 'photo', label: 'Add a Profile Picture' },
    { id: 'additional', label: 'Additional Information' }
  ];

  // Add handler to add more certification fields
  const addMoreCertifications = () => {
    setCertifications([...certifications, '']);
  };

  // Add handler for certification changes
  const handleCertificationChange = (index, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = value;
    setCertifications(updatedCertifications);
  };

  // Add handlers for skills
  const addSkill = () => {
    if (newSkill.trim()) {
      setKeySkills([...keySkills, newSkill]);
      setNewSkill('');
    }
  };
  
  const removeSkill = (index) => {
    const updatedSkills = [...keySkills];
    updatedSkills.splice(index, 1);
    setKeySkills(updatedSkills);
  };
  
  // Add handlers for interests
  const addInterest = () => {
    if (newInterest.trim()) {
      setAreasOfInterest([...areasOfInterest, newInterest]);
      setNewInterest('');
    }
  };
  
  const removeInterest = (index) => {
    const updatedInterests = [...areasOfInterest];
    updatedInterests.splice(index, 1);
    setAreasOfInterest(updatedInterests);
  };

  // Add handlers for location selection
  const toggleLocationSelection = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  // Update the relocate option handler to toggle selection
  const setRelocateOption = (isWilling) => {
    if (relocateWillingness === isWilling) {
      // If clicking the same option again, deselect it
      setRelocateWillingness(null);
    } else {
      // Otherwise select the new option
      setRelocateWillingness(isWilling);
    }
  };

  // Add handler to remove a language
  const removeLanguage = (language) => {
    setLanguages(languages.filter(lang => lang !== language));
  };
  
  // Add handler to add a new language
  const addLanguage = (language) => {
    if (language && !languages.includes(language)) {
      setLanguages([...languages, language]);
    }
  };

  // Work experience handlers
  const handleAddWorkExperience = () => {
    setShowWorkExperienceForm(true);
    setCurrentWorkExperience({
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      description: ''
    });
  };

  const handleWorkExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentWorkExperience(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveWorkExperience = () => {
    if (currentWorkExperience.id) {
      // Edit existing experience
      setWorkExperiences(workExperiences.map(exp => 
        exp.id === currentWorkExperience.id ? currentWorkExperience : exp
      ));
    } else {
      // Add new experience
      setWorkExperiences([
        ...workExperiences, 
        { ...currentWorkExperience, id: Date.now().toString() }
      ]);
    }
    setShowWorkExperienceForm(false);
  };

  const handleEditWorkExperience = (experience) => {
    setCurrentWorkExperience(experience);
    setShowWorkExperienceForm(true);
  };

  const handleDeleteWorkExperience = (id) => {
    setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
  };

  // Update work experience handlers
  const handleWorkExperienceDocUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setWorkExperienceDoc(file);
      setWorkExperienceDocName(file.name);
    }
  };

  const handleWorkExperienceDocDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setWorkExperienceDoc(file);
      setWorkExperienceDocName(file.name);
    }
  };

  const handleWorkExperienceDragOver = (e) => {
    e.preventDefault();
  };

  const removeWorkExperienceDoc = () => {
    setWorkExperienceDoc(null);
    setWorkExperienceDocName('');
  };

  // Resume upload handlers
  const handleResumeDocUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeDoc(file);
      setResumeDocName(file.name);
    }
  };

  const handleResumeDocDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setResumeDoc(file);
      setResumeDocName(file.name);
    }
  };

  const handleResumeDragOver = (e) => {
    e.preventDefault();
  };

  const removeResumeDoc = () => {
    setResumeDoc(null);
    setResumeDocName('');
  };

  // Add profile picture handlers
  const handleProfilePictureUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicturePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    setProfilePicturePreview(null);
  };

  if (!isOpen) return null;

  const strengthInfo = getPasswordStrengthLabel();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-hidden my-4">
        {/* Sidebar */}
        <div className="flex h-[600px] overflow-hidden">
          <div className="w-72 bg-gray-100 p-4 border-r overflow-y-auto">
            {steps.map(step => (
              <div 
                key={step.id}
                className={`p-3 mb-2 rounded cursor-pointer ${
                  activeStep === step.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-8 relative overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Personal Details Form */}
            {activeStep === 'personal' && (
              <div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter first name"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter last name"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        <span className="text-sm text-gray-500">+91</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="10-digit number"
                        maxLength="10"
                        pattern="[0-9]{10}"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    {!errors.phone && formData.phone && formData.phone.length < 10 && (
                      <p className="mt-1 text-xs text-yellow-600">{10 - formData.phone.length} more digits needed</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State of Residence</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="">Select a state</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="••••••"
                    />
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center mb-1">
                          <div className="w-full h-1.5 bg-gray-200 rounded-full mr-2">
                            <div 
                              className={`h-1.5 rounded-full bg-${passwordStrength.score > 0 ? strengthInfo.color : 'gray-300'}`} 
                              style={{ width: `${passwordStrength.score * 20}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm text-${strengthInfo.color}`}>{strengthInfo.label}</span>
                        </div>
                        <ul className="text-xs space-y-1 mt-2">
                          <li className={passwordStrength.isLongEnough ? 'text-green-600' : 'text-gray-500'}>
                            ✓ At least 8 characters
                          </li>
                          <li className={passwordStrength.hasUpperCase ? 'text-green-600' : 'text-gray-500'}>
                            ✓ At least one uppercase letter
                          </li>
                          <li className={passwordStrength.hasLowerCase ? 'text-green-600' : 'text-gray-500'}>
                            ✓ At least one lowercase letter
                          </li>
                          <li className={passwordStrength.hasNumber ? 'text-green-600' : 'text-gray-500'}>
                            ✓ At least one number
                          </li>
                          <li className={passwordStrength.hasSpecialChar ? 'text-green-600' : 'text-gray-500'}>
                            ✓ At least one special character
                          </li>
                        </ul>
                      </div>
                    )}
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="••••••"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Educational Background Form (placeholder) */}
            {activeStep === 'educational' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Educational Background</h2>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Highest Educational Background</label>
                    <input
                      type="text"
                      name="highestEducation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., B.Tech, M.Tech, PhD"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GPA / Percentage</label>
                    <input
                      type="text"
                      name="gpa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 8.9 CGPA or 85%"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., IILM University"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                    <input
                      type="text"
                      name="graduationYear"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 2028"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Major / Field of Study</label>
                    <input
                      type="text"
                      name="fieldOfStudy"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                  
                  {certifications.map((cert, index) => (
                    <div key={index} className="mb-3">
                      <input
                        type="text"
                        value={cert}
                        onChange={(e) => handleCertificationChange(index, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Cloud Computing Practitioner by Google"
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-6 text-right">
                  <button 
                    className="text-blue-500 text-sm hover:underline"
                    onClick={addMoreCertifications}
                    type="button"
                  >
                    Add more...
                  </button>
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Skills Form */}
            {activeStep === 'skills' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Showcase Your Skills</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Skills</label>
                  <div className="border border-gray-300 rounded-md p-3 mb-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {keySkills.map((skill, index) => (
                        <div key={index} className="flex items-center bg-gray-100 rounded-md px-3 py-1.5">
                          <span className="text-blue-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="2" y="10" width="4" height="10" fill="#0066FF"/>
                              <rect x="8" y="6" width="4" height="14" fill="#0066FF"/>
                              <rect x="14" y="2" width="4" height="18" fill="#0066FF"/>
                            </svg>
                          </span>
                          <span className="text-sm">{skill}</span>
                          <button 
                            type="button" 
                            onClick={() => removeSkill(index)}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                        className="flex-grow px-3 py-2 border-none focus:outline-none text-sm"
                      />
                      <button 
                        type="button" 
                        onClick={addSkill}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                  <div className="border border-gray-300 rounded-md p-3 mb-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {areasOfInterest.map((interest, index) => (
                        <div key={index} className="flex items-center bg-gray-100 rounded-md px-3 py-1.5">
                          <span className="text-blue-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                              <line x1="12" y1="12" x2="12" y2="12" stroke="#0066FF"/>
                              <line x1="8" y1="11" x2="16" y2="11" stroke="#0066FF"/>
                            </svg>
                          </span>
                          <span className="text-sm">{interest}</span>
                          <button 
                            type="button" 
                            onClick={() => removeInterest(index)}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <input
                        type="text"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        placeholder="Add an area of interest"
                        className="flex-grow px-3 py-2 border-none focus:outline-none text-sm"
                      />
                      <button 
                        type="button" 
                        onClick={addInterest}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Work Experience Form */}
            {activeStep === 'experience' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                
                <div 
                  className="mb-6 border border-dashed border-gray-300 rounded-md p-8 text-center bg-white"
                  onDrop={handleWorkExperienceDocDrop}
                  onDragOver={handleWorkExperienceDragOver}
                >
                  {!workExperienceDoc ? (
                    <>
                      <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <p className="text-gray-800 mb-1">Drag and drop PDF, DOC, or DOCX file to upload</p>
                      <p className="text-gray-600 text-sm mb-4">(Experience letter, certificate, or any work-related document)</p>
                      <p className="text-gray-500 text-sm mb-4">or</p>
                      <label className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none text-sm cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleWorkExperienceDocUpload}
                        />
                        Select file
                      </label>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 mb-4 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <div className="flex-1 truncate">
                          <p className="font-medium">{workExperienceDocName}</p>
                          <p className="text-sm text-gray-500">
                            {(workExperienceDoc.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                        <button 
                          onClick={removeWorkExperienceDoc} 
                          className="ml-2 text-gray-500 hover:text-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setWorkExperienceDoc(null)}
                        className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
                      >
                        Upload a different document
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Upload Resume Form */}
            {activeStep === 'resume' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Resume</h2>
                
                <div 
                  className="mb-6 border border-dashed border-gray-300 rounded-md p-8 text-center bg-white"
                  onDrop={handleResumeDocDrop}
                  onDragOver={handleResumeDragOver}
                >
                  {!resumeDoc ? (
                    <>
                      <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <p className="text-gray-800 mb-1">Drag and drop PDF, DOC, or DOCX file to upload</p>
                      <p className="text-gray-500 text-sm mb-4">or</p>
                      <label className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none text-sm cursor-pointer">
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeDocUpload}
                        />
                        Select file
                      </label>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 mb-4 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <div className="flex-1 truncate">
                          <p className="font-medium">{resumeDocName}</p>
                          <p className="text-sm text-gray-500">
                            {(resumeDoc.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                        <button 
                          onClick={removeResumeDoc} 
                          className="ml-2 text-gray-500 hover:text-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <button 
                        type="button"
                        onClick={removeResumeDoc}
                        className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
                      >
                        Upload a different document
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Location Preference Form */}
            {activeStep === 'location' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Where do you want to Work</h2>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {['Delhi', 'Gurgaon', 'Noida', 'Mumbai'].map((city) => (
                    <div 
                      key={city}
                      onClick={() => toggleLocationSelection(city)}
                      className={`border ${selectedLocations.includes(city) ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-md p-4 text-center cursor-pointer hover:border-blue-300 transition-colors`}
                    >
                      <span className={`${selectedLocations.includes(city) ? 'text-blue-600' : 'text-gray-800'}`}>{city}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  {['Bengaluru', 'Pune', 'Hyderabad'].map((city) => (
                    <div 
                      key={city}
                      onClick={() => toggleLocationSelection(city)}
                      className={`border ${selectedLocations.includes(city) ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-md p-4 text-center cursor-pointer hover:border-blue-300 transition-colors`}
                    >
                      <span className={`${selectedLocations.includes(city) ? 'text-blue-600' : 'text-gray-800'}`}>{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-2">Are you willing to relocate to the selected Location?</p>
                  <div className="grid grid-cols-2 gap-0 border border-gray-300 rounded-md overflow-hidden">
                    <div 
                      onClick={() => setRelocateOption(true)}
                      className={`py-3 text-center cursor-pointer ${relocateWillingness === true ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                    >
                      Yes
                    </div>
                    <div 
                      onClick={() => setRelocateOption(false)}
                      className={`py-3 text-center cursor-pointer ${relocateWillingness === false ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'} border-l border-gray-300`}
                    >
                      No
                    </div>
                  </div>
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Profile Picture Form */}
            {activeStep === 'photo' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Add a Profile Picture</h2>
                
                <div className="flex flex-col items-center justify-center mb-8">
                  {profilePicturePreview ? (
                    // Show the uploaded image
                    <div className="relative mb-4">
                      <img 
                        src={profilePicturePreview} 
                        alt="Profile Preview" 
                        className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                      />
                      <button 
                        onClick={removeProfilePicture}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 transform translate-x-1/4 -translate-y-1/4 hover:bg-red-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    // Show placeholder avatar
                    <div className="w-32 h-32 rounded-full bg-purple-100 mb-4 flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-medium mb-3">Khushi Diwan</h3>
                  
                  <label className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleProfilePictureUpload}
                    />
                    {profilePicturePreview ? 'Change Picture' : 'Upload Picture'}
                  </label>
                  
                  {profilePicture && (
                    <p className="mt-2 text-sm text-gray-500">
                      {profilePicture.name} ({(profilePicture.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  )}
                </div>
                
                {/* Next Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Additional Information Form */}
            {activeStep === 'additional' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <input
                    type="text"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                    placeholder="linkedin.com/profile/"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability for Immediate Hiring?</label>
                  <div className="grid grid-cols-2 gap-0 border border-gray-300 rounded-md overflow-hidden">
                    <div 
                      onClick={() => setIsAvailableImmediately(true)}
                      className={`py-3 text-center cursor-pointer ${isAvailableImmediately === true ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                    >
                      Yes
                    </div>
                    <div 
                      onClick={() => setIsAvailableImmediately(false)}
                      className={`py-3 text-center cursor-pointer ${isAvailableImmediately === false ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'} border-l border-gray-300`}
                    >
                      No
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">What Languages do you Speak</label>
                  <div className="border border-gray-300 rounded-md p-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {languages.map((language) => (
                        <div key={language} className="flex items-center bg-gray-100 rounded-md px-3 py-1.5">
                          <span className="text-blue-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                            </svg>
                          </span>
                          <span className="text-sm">{language}</span>
                          <button 
                            type="button" 
                            onClick={() => removeLanguage(language)}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <input
                        type="text"
                        id="newLanguage"
                        placeholder="Add a language"
                        className="flex-grow px-3 py-2 border-none focus:outline-none text-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value) {
                            addLanguage(e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                      <button 
                        type="button" 
                        onClick={() => {
                          const input = document.getElementById('newLanguage');
                          if (input.value) {
                            addLanguage(input.value);
                            input.value = '';
                          }
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="mt-8 pb-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base flex items-center justify-center space-x-2"
                  >
                    <span>Submit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileModal; 