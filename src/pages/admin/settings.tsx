import { Outlet } from 'react-router-dom';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <Outlet />
    </main>
  );
}
