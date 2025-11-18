import { ActionsIcon } from './icons/ActionsIcon';
import { CarbonIcon } from './icons/CarbonIcon';
import { CollectIcon } from './icons/CollectIcon';
import { InsightIcon } from './icons/InsightIcon';
import { ReportsIcon } from './icons/ReportsIcon';
import { ReviewsIcon } from './icons/ReviewsIcon';
import { SettingIcon } from './icons/SettingIcon';
import { UtilitiesIcon } from './icons/UtilitiesIcon';

export const sidebarData = [
  {
    title: 'Insights',
    icon: <InsightIcon />,
    link: '/insights',
  },
  {
    title: 'Collect',
    icon: <CollectIcon />,
    link: '/collect',
  },
  {
    title: 'Reviews',
    icon: <ReviewsIcon />,
    link: '/reviews',
  },
  {
    title: 'Carbon',
    icon: <CarbonIcon />,
    link: '/carbon',
  },
  {
    title: 'Utilities',
    icon: <UtilitiesIcon />,
    link: '/utilities',
  },
  {
    title: 'Reports',
    icon: <ReportsIcon />,
    link: '/reports',
  },
  {
    title: 'Actions',
    icon: <ActionsIcon />,
    link: '/actions',
  },
  {
    title: 'Settings',
    icon: <SettingIcon />,
    link: '/settings',
  },
];
