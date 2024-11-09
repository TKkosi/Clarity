import { useEffect, useState } from 'react';
import api from '../../utils/api';

const Activities = () => {
    interface Activities {
        _id: string;
        description: string;
        date: string;
      }
    const [activities, setActivities] = useState<Activities[]>([]);
    useEffect(() => {
        const fetchActivities = async () => {
          try {
            const response = await api.get(`/activities`);
            setActivities(response.data);
          } catch (error) {
            console.error('Error fetching notes:', error);
          }
        };
        fetchActivities();
      }, []);
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto border-2 border-emerald-800 font-mono">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

      <div className="space-y-4 overflow-y-auto max-h-80">
        {activities && activities?.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity._id}
              className="p-3 bg-gray-100 rounded-lg flex items-start justify-between shadow-sm"
            >
              <div>
                <p className="text-gray-700">{activity.description}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No recent activities.</p>
        )}
      </div>
    </div>
  );
};

export default Activities;
