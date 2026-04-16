import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";

export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div>
     
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Keep Your Friendships Alive</h1>
        <p className="text-gray-500">Stay connected with your close ones</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}