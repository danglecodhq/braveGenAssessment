import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SettingsMenu from './settings/SettingsMenu';

export default function SettingsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full min-h-screen">
      {/* Drawer Toggle */}
      <button onClick={() => setIsOpen(true)} className="p-4 text-gray-700">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Settings</h2>
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <SettingsMenu />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
