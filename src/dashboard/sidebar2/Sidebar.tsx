import * as Icons from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { menuItems } from './menuData';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => (prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]));
  };

  return (
    <div
      className={`flex flex-col h-screen bg-white border-r transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {menuItems.map(section => (
          <div key={section.title} className="mt-4">
            <p className={`text-gray-500 px-4 ${isOpen ? 'text-left' : 'text-center text-xs'}`}>
              {section.title}
            </p>
            {section.items.map(item => (
              <div key={item.name}>
                <div
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => (item.children ? toggleMenu(item.name) : null)}
                >
                  <FontAwesomeIcon icon={(Icons as any)[item.icon]} className="text-gray-700" />
                  {isOpen ? (
                    <span className="ml-3">{item.name}</span>
                  ) : (
                    <span className="text-xs mt-1">{item.name}</span>
                  )}
                  {item.children && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-auto transition-transform ${
                        openMenus.includes(item.name) ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
                {item.children && openMenus.includes(item.name) && (
                  <div className="ml-8">
                    {item.children.map(sub => (
                      <div key={sub.name} className="flex items-center px-4 py-2 hover:bg-gray-50">
                        <FontAwesomeIcon
                          icon={(Icons as any)[sub.icon]}
                          className="text-gray-500"
                        />
                        {isOpen ? (
                          <span className="ml-3">{sub.name}</span>
                        ) : (
                          <span className="text-xs mt-1">{sub.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
