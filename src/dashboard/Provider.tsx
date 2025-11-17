import React from 'react';
import { useLocation } from 'react-router-dom';

interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  settingsDrawerOpen?: boolean;
  openSettingsDrawer?: () => void;
  closeSettingsDrawer?: () => void;
}

// create new context
const Context = React.createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = React.useState(true);
  const location = useLocation();

  const openSidebar = React.useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const openSettingsDrawer = React.useCallback(() => {
    setSettingsDrawerOpen(true);
  }, []);

  const closeSettingsDrawer = React.useCallback(() => {
    setSettingsDrawerOpen(false);
  }, []);

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // close Sidebar on route changes
  React.useEffect(() => {
    return () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };
  }, [location, sidebarOpen]);

  return (
    <Context.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        settingsDrawerOpen,
        openSettingsDrawer,
        closeSettingsDrawer,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { sidebarOpen, openSidebar, closeSidebar }
export function useDashboardContext() {
  return React.useContext(Context);
}
