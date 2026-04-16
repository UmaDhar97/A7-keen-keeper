import React, { useState } from 'react';
import { useTimeline } from '../context/TimelineContext';
import { Phone, MessageSquare, Video } from 'lucide-react';

const Timeline = () => {
  const { activities } = useTimeline();
  const [filter, setFilter] = useState('All');

  const filteredActivities = filter === 'All' 
    ? activities 
    : activities.filter(a => a.type === filter);

  const getIcon = (type) => {
    if (type === 'Call') return <Phone size={18} className="text-blue-500" />;
    if (type === 'Text') return <MessageSquare size={18} className="text-green-500" />;
    return <Video size={18} className="text-orange-500" />;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Timeline</h1>
        
        {/* Filter (Challenge C2) */}
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="All">All Interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredActivities.length > 0 ? filteredActivities.map(activity => (
          <div key={activity.id} className="bg-white border p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-full">{getIcon(activity.type)}</div>
              <div>
                <p className="font-bold text-gray-800">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.date}</p>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 text-gray-400">No history found. Try a quick check-in!</div>
        )}
      </div>
    </div>
  );
};

export default Timeline;