import React, { useState } from 'react';
import { FiUser, FiBell, FiLock, FiGlobe, FiCamera, FiShield, FiMoon, FiSun } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);

  const settingsTabs = [
    { id: 'profile', label: 'Profile Settings', icon: <FiUser /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
    { id: 'security', label: 'Security & Privacy', icon: <FiLock /> },
    { id: 'appearance', label: 'Appearance', icon: <FiGlobe /> }
  ];

  const notificationSettings = [
    { id: 'course_updates', label: 'Course Updates', description: 'Get notified about new course content' },
    { id: 'reminders', label: 'Learning Reminders', description: 'Daily reminders to continue learning' },
    { id: 'assessment', label: 'Assessment Results', description: 'Results from your skill assessments' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ marginLeft: "7.9cm" }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {settingsTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  <div className="flex items-center space-x-8">
                    <div className="relative">
                      <img
                        src="/api/placeholder/120/120"
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <button className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                        <FiCamera className="text-lg" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Profile Photo</h3>
                      <p className="text-gray-500">Upload a new profile picture</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
                      placeholder="Tell us about yourself..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
                  {notificationSettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{setting.label}</h3>
                        <p className="text-sm text-gray-500">{setting.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-8">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                        <p className="text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div className="space-y-8">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">Theme Preference</h3>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setDarkMode(false)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                          !darkMode ? 'bg-white shadow-sm' : 'bg-transparent'
                        }`}
                      >
                        <FiSun className="text-yellow-500" />
                        <span>Light</span>
                      </button>
                      <button
                        onClick={() => setDarkMode(true)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                          darkMode ? 'bg-gray-800 text-white shadow-sm' : 'bg-transparent'
                        }`}
                      >
                        <FiMoon className="text-blue-500" />
                        <span>Dark</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">Language</h3>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="mt-8 flex justify-end">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;