import { Navigate } from 'react-router-dom';

export default function SettingsIndex() {
  // Redirect the index of /admin/settings to the integrations subpage
  return <Navigate to="integrations" replace />;
}
