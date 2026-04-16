import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTimeline } from '../context/TimelineContext';

const Stats = () => {
  const { activities } = useTimeline();

 
  const data = [
    { name: 'Call', value: activities.filter(a => a.type === 'Call').length },
    { name: 'Text', value: activities.filter(a => a.type === 'Text').length },
    { name: 'Video', value: activities.filter(a => a.type === 'Video').length },
  ].filter(item => item.value > 0);

 
  const COLORS = ['#4f46e5', '#10b981', '#f59e0b'];

  return (
    <div className="max-w-4xl mx-auto p-10">
     
      <h1 className="text-3xl font-bold mb-8 text-center">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-3xl border h-[450px] shadow-sm">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={data} 
                innerRadius={80} 
                outerRadius={120} 
                paddingAngle={8} 
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="text-lg">No interactions logged yet.</p>
            <p className="text-sm">Go to a friend's detail page and log a Call, Text, or Video!</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Stats;