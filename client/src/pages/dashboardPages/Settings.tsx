
import { useEffect } from "react";

interface SettingsProps {
    childPage: (page: string) => void;
}

function Settings({ childPage }: SettingsProps) {
    useEffect(() => {
        childPage("settings");
    }, [childPage]);

    return (
        <div className="min-h-screen bg-gray-100 p-6 bg-gradient-to-b from-blue-200 to-purple-200 ">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
        
        {/* Profile Settings Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="name" className="text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-3/4 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className="w-3/4 p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </section>

        {/* Notification Preferences Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Task Updates</span>
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email Reminders</span>
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Push Notifications</span>
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Account Management Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Management</h2>
          <div className="space-y-4">
            <button className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Delete Account
            </button>
            <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Change Password
            </button>
          </div>
        </section>
      </div>
    </div>
    )
}

export default Settings;