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
    link: '/admin/insights',
  },
  {
    title: 'Collect',
    icon: <CollectIcon />,
    link: '/admin/collect',
  },
  {
    title: 'Reviews',
    icon: <ReviewsIcon />,
    link: '/admin/reviews',
  },
  {
    title: 'Carbon',
    icon: <CarbonIcon />,
    link: '/admin/carbon',
  },
  {
    title: 'Utilities',
    icon: <UtilitiesIcon />,
    link: '/admin/utilities',
  },
  {
    title: 'Reports',
    icon: <ReportsIcon />,
    link: '/admin/reports',
  },
  {
    title: 'Actions',
    icon: <ActionsIcon />,
    link: '/admin/actions',
  },
  {
    title: 'Settings',
    icon: <SettingIcon />,
    link: '/admin/settings',
  },
];
