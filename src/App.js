// App.js
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

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;