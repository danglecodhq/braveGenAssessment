import { Navigate, useParams } from 'react-router-dom';
import { SettingPageContent } from './SettingPageContent';

// Titles for the settings sub-pages. Integrations is handled by its own file
// so this map is for the simple pages that only need a title.
const TITLE_MAP: Record<string, string> = {
  assets: 'Assets',
  configuration: 'Configuration',
  hierarchy: 'Hierarchy',
  manage: 'Manage',
  tags: 'Tags',
  users: 'Users',
  // add other simple settings pages here if needed
};

type Props = {
  sectionKey?: string;
};

export default function SettingsSectionPage(props: Props) {
  const params = useParams();
  const section = props.sectionKey ?? params.section;

  // If no section provided, redirect to the integrations subpage (default)
  if (!section) return <Navigate to="/admin/settings/integrations" replace />;

  // If this ever matches the special integrations key, let the static
  // `integrations.tsx` file handle it (file-based routing gives static files
  // precedence). However returning the Content here is harmless for other
  // sections.

  const title = TITLE_MAP[section] ?? section.charAt(0).toUpperCase() + section.slice(1);

  return <SettingPageContent title={title} />;
}
