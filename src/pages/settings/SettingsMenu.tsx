import { NavLink } from 'react-router-dom';
import { settingsMenu } from './settingsMenuData';

export default function SettingsMenu() {
  return (
    <aside className="w-64 bg-gray-100 h-max">
      {settingsMenu.map(section => (
        <div key={section.section} className="mb-4">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {section.section}
          </div>
          <div>
            {section.items.map(item =>
              item.disabled ? (
                <div
                  key={item.name}
                  className="flex items-center px-4 py-2 rounded-md mb-1 text-gray-400 cursor-not-allowed"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md mb-1 transition-colors hover:border-lime-600 hover:ring-1 ${
                      isActive ? 'bg-lime-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3 text-lime-600" />
                  <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
              )
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
