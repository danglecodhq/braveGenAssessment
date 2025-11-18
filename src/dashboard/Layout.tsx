import { Overlay } from './Overlay';
import { DashboardProvider } from './Provider';
import { Sidebar } from './sidebar/Sidebar';
import { TopBar } from './TopBar';

import { useLocation } from 'react-router-dom';
import SettingsMenu from '../pages/admin/settings/SettingsMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  const location = useLocation();
  const isSettingsPage = location.pathname.startsWith('/admin/settings');

  return (
    <DashboardProvider>
      <div className="bg-gray-100 h-screen overflow-hidden relative">
        <div className="flex items-start">
          <Overlay />
          {/* Primary Sidebar */}
          <Sidebar mobileOrientation="end" />

          {/* Secondary Sidebar Placeholder */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden  ${
              isSettingsPage ? 'w-[256px] ml-14 px-2' : 'w-0'
            } `}
          >
            {isSettingsPage && <SettingsMenu />}
          </div>

          {/* Main Content */}
          <div className="flex flex-col h-screen pl-0 w-full lg:pl-10 lg:space-y-4">
            <TopBar />
            <main className="h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4">
              {children}
            </main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
