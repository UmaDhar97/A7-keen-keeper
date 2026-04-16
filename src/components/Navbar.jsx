import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Timeline', path: '/timeline', icon: <Clock size={18} /> },
    { name: 'Stats', path: '/stats', icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
      <div className="flex items-center gap-2 text-green-800 font-bold text-xl">
       
        <span>KeenKeeper</span>
      </div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-1 font-medium transition-colors ${
                isActive ? 'text-green-800' : 'text-gray-500 hover:text-indigo-400'
              }`
            }
          >
            {item.icon} {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;