import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      type, // 'Call', 'Text', 'Video'
      title: `${type} with ${friendName}`,
    };
    setActivities([newEntry, ...activities]);
    toast.success(`${type} logged successfully!`);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);