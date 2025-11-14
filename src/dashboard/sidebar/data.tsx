import { AnalyticIcon } from './icons/AnalyticIcon';
import { ApplicationIcon } from './icons/ApplicationIcon';
import { BillsIcon } from './icons/BillsIcon';
import { DemographicIcon } from './icons/DemographicIcon';
import { DocIcon } from './icons/DocIcon';
import { HomeIcon } from './icons/HomeIcon';
import { MonitoringIcon } from './icons/MonitoringIcon';

export const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Bills',
    icon: <BillsIcon />,
    link: '/admin/bills',
  },
  {
    title: 'Bills 2',
    icon: <BillsIcon />,
    link: '/admin/bills2',
  },
  {
    title: 'Applications',
    icon: <ApplicationIcon />,
    link: '/admin/applications',
  },
  {
    title: 'Monitoring',
    icon: <MonitoringIcon />,
    link: '/admin/monitoring',
  },
  {
    title: 'Demographics',
    icon: <DemographicIcon />,
    link: '/admin/demographics',
  },
  {
    title: 'Analytics',
    icon: <AnalyticIcon />,
    link: '/admin/analytics',
  },
  {
    title: 'Documentation',
    icon: <DocIcon />,
    link: '/admin/documentation',
  },
];
