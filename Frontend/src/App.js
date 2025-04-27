// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/main';
import TrainingModules from './components/TrainingModules';
import SkillAssessment from './components/SkillAssessment';
import JobMatches from './components/JobMatches';
import MyApplications from './components/MyApplications';
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import CompleteProfileModal from './components/CompleteProfileModal';

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleProfileSubmit = (data) => {
    console.log("Profile data submitted:", data);
    setShowProfileModal(false);
  };

  return (
    <BrowserRouter>
      <Header onOpenCompleteProfile={() => setShowProfileModal(true)} />
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/training" element={<TrainingModules />} />
        <Route path="/assessment" element={<SkillAssessment />} />
        <Route path="/jobs" element={<JobMatches />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
      
      {/* Complete Profile Modal */}
      <CompleteProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)}
        onSubmit={handleProfileSubmit}
      />
    </BrowserRouter>
  );
}

export default App;