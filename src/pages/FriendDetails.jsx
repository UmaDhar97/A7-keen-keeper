import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Clock, Target, Calendar, Archive, Trash2, Moon, Edit } from 'lucide-react';
import { useTimeline } from '../context/TimelineContext';
import friendsData from '../data/friends.json';

const FriendDetails = () => {
  const { id } = useParams();
  const { addActivity } = useTimeline();
  
 
  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center">Friend not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border rounded-3xl p-6 text-center">
          <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-50" />
          <h2 className="text-2xl font-bold">{friend.name}</h2>
          <p className="text-indigo-600 font-medium mb-2 uppercase text-xs tracking-widest">{friend.status}</p>
          <div className="flex justify-center gap-2 mb-4">
            {friend.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{tag}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">{friend.bio}</p>
          <p className="text-gray-400 text-sm mb-8">{friend.email}</p>

         
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Moon size={18} /> Snooze 2 Weeks
            </button>
            <button className="w-full py-3 px-4 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Archive size={18} /> Archive
            </button>
            <button className="w-full py-3 px-4 bg-red-50 text-red-600 rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 transition">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>
      </div>

     
      <div className="lg:col-span-8 space-y-6">
        
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded-2xl p-6">
            <Clock className="text-indigo-500 mb-2" />
            <p className="text-gray-500 text-xs">Days Since Contact</p>
            <p className="text-2xl font-bold">{friend.days_since_contact}</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <Target className="text-green-500 mb-2" />
            <p className="text-gray-500 text-xs">Goal (Days)</p>
            <p className="text-2xl font-bold">{friend.goal}</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <Calendar className="text-orange-500 mb-2" />
            <p className="text-gray-500 text-xs">Next Due Date</p>
            <p className="text-xl font-bold">{friend.next_due_date}</p>
          </div>
        </div>

        
        <div className="bg-white border rounded-2xl p-6 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Relationship Goal</h3>
            <p className="text-gray-500 text-sm">You aim to contact {friend.name} every {friend.goal} days.</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full border">
            <Edit size={20} className="text-gray-600" />
          </button>
        </div>

       
        <div className="bg-indigo-600 rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => addActivity(friend.name, 'Call')}
              className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition"
            >
              <Phone size={24} /> <span>Call</span>
            </button>
            <button 
              onClick={() => addActivity(friend.name, 'Text')}
              className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition"
            >
              <MessageSquare size={24} /> <span>Text</span>
            </button>
            <button 
              onClick={() => addActivity(friend.name, 'Video')}
              className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition"
            >
              <Video size={24} /> <span>Video</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;