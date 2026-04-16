import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        Back to Home
      </button>
    </div>
  );
}