import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDashboardContext } from '../../../dashboard/Provider';
import SettingsMenu from './SettingsMenu';

type DrawerMenuProps = {
  children: React.ReactNode;
};

export default function DrawerMenu({ children }: DrawerMenuProps) {
  const { settingsDrawerOpen, closeSettingsDrawer } = useDashboardContext();

  return (
    <div className="flex h-full min-h-screen">
      {/* Drawer - positioned absolutely from TopBar */}
      {settingsDrawerOpen && (
        <div className="h-max w-64 overflow-hidden bg-transparent transition-all duration-300 ease-in-out">
          <div className="relative bg-gray-50 p-4">
            <button
              onClick={closeSettingsDrawer}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close drawer"
            >
              <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
            </button>
            <div className="mt-6">
              <SettingsMenu />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
