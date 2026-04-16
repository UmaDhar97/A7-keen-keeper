import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import friendsData from '../data/friends.json';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  
  const getCount = (status) => friends.filter(f => f.status === status).length;

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
        </p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-all shadow-md active:scale-95">
          <UserPlus size={20} /> Add a Friend
        </button>
      </section>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <SummaryCard icon={<Users className="text-blue-500" />} label="Total Friends" value={friends.length} />
        <SummaryCard icon={<CheckCircle className="text-green-500" />} label="On Track" value={getCount('on-track')} />
        <SummaryCard icon={<Clock className="text-yellow-500" />} label="Almost Due" value={getCount('almost due')} />
        <SummaryCard icon={<AlertCircle className="text-red-500" />} label="Overdue" value={getCount('overdue')} />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <Link 
            to={`/friend/${friend.id}`} 
            key={friend.id} 
            className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={friend.picture} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={friend.name} 
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{friend.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{friend.days_since_contact} days since contact</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {friend.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <StatusBadge status={friend.status} />
          </Link>
        ))}
      </div>
    </div>
  );
};


const SummaryCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
    <div className="p-3 bg-gray-50 rounded-xl">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-tight">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);


const StatusBadge = ({ status }) => {
  const styles = {
    "overdue": "bg-red-50 text-red-600 border-red-100",
    "almost due": "bg-yellow-50 text-yellow-600 border-yellow-100",
    "on-track": "bg-green-50 text-green-600 border-green-100"
  };
  return (
    <span className={`text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
};

export default Home;