import { useEffect} from 'react';

interface SupportProps {
    childPage: (page: string) => void;
}
function SupportPages({ childPage }: SupportProps) {
    useEffect(() => {
        childPage("support");
    }, [childPage]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200  p-6 font-mono overflow-y-scroll">
            {/* {loading && <Loader />} */}
        {/* Header */}
            <header className="bg-white shadow-md rounded-md p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Support</h1>
                <p className="text-gray-600">How can we help you today?</p>
            </header>

        {/* Main Content */}
      <div className="grid grid-cols-1 tablet:grid-cols-2  gap-6">
       {/* FAQ Section */}
        <section className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">How to create a task?</h3>
              <p className="text-sm text-gray-600">
                Navigate to the "Tasks" tab, click "Create Task," and fill in the required details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">How to reset my password?</h3>
              <p className="text-sm text-gray-600">
                Go to "Settings," then click on "Change Password," and follow the instructions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">How to add team members?</h3>
              <p className="text-sm text-gray-600">
                Visit the "Team" page and use the "Add Member" button to invite new members.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-emerald-500 border-2 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500 border-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-emerald-500 border-2"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-2 rounded-md shadow hover:bg-emerald-500"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Additional Resources */}
      <div className="mt-6 bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Resources</h2>
        <ul className="space-y-2">
          <li className="text-blue-500 hover:underline">
            <a href="/docs">Documentation</a>
          </li>
          <li className="text-blue-500 hover:underline">
            <a href="/tutorials">Video Tutorials</a>
          </li>
          <li className="text-blue-500 hover:underline">
            <a href="/forums">Community Forums</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPages;
