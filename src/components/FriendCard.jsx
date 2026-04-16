import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusColor = {
    "overdue": "bg-red-100 text-red-500",
    "almost due": "bg-yellow-100 text-yellow-500",
    "on-track": "bg-green-100 text-green-500"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="p-4 shadow rounded-lg cursor-pointer"
    >
      <img src={friend.picture} className="w-full h-40 object-cover rounded" />
      <h2 className="font-bold mt-2">{friend.name}</h2>
      <p>{friend.days_since_contact} days ago</p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {friend.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 px-2 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className={`mt-2 p-1 text-center rounded ${statusColor[friend.status]}`}>
        {friend.status}
      </div>
    </div>
  );
}