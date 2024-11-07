import { useState } from 'react';

const Sidebar = ({open}) => {
  const [isCollapsed, setIsCollapsed] = useState(open);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-screen  bg-gray-800 text-white ${isCollapsed ? 'w-16' : 'w-64'} transition-width duration-300`}>
      <button
        className="p-2 bg-gray-700 hover:bg-gray-600 w-full text-center"
        onClick={toggleSidebar}
      >
        {isCollapsed ? '>' : '<'}
      </button>
      <ul className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Item 1</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Item 2</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Item 3</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Item 4</li>
      </ul>
    </div>
  );
};

export default Sidebar;
