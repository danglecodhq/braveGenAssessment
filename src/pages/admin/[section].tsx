import { Navigate, useParams } from 'react-router-dom';
import { Content } from '../../components/Content';

const TITLE_MAP: Record<string, string> = {
  actions: 'Actions',
  carbon: 'Carbon',
  collect: 'Collect',
  insights: 'Insights',
  reports: 'Reports',
  reviews: 'Reviews',
  //settings: 'Settings',
  utilities: 'Utilities',
};

type Props = {
  // optional override when this component is used programmatically (e.g. from a wrapper file)
  sectionKey?: string;
};

export default function AdminSectionPage(props: Props) {
  const params = useParams();
  const section = props.sectionKey ?? params.section;

  if (!section) return <Navigate to="/admin" replace />;

  const title = TITLE_MAP[section] ?? section.charAt(0).toUpperCase() + section.slice(1);

  return <Content title={title} />;
}
