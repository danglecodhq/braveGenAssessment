import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SettingsMenu from './SettingsMenu';

type DrawerMenuProps = {
  children: React.ReactNode;
};

export default function DrawerMenu({ children }: DrawerMenuProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-full min-h-screen">
      {/* Drawer */}
      {isOpen && (
        <div className="h-max w-64 overflow-hidden bg-transparent transition-all duration-300 ease-in-out">
          <div className="relative bg-gray-50 p-4">
            <button
              onClick={() => setIsOpen(false)}
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
      <div className="relative flex flex-1 flex-col">
        {/* Toggle Button - positioned at middle-left, covered by drawer when open */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-700 hover:text-lime-600 focus:outline-none"
            aria-label="Open settings drawer"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
          </button>
        )}

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
