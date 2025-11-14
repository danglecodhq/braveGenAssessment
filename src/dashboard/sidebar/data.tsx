import { ActionsIcon } from './icons/ActionsIcon';
import { CarbonIcon } from './icons/CarbonIcon';
import { CollectIcon } from './icons/CollectIcon';
import { DocIcon } from './icons/DocIcon';
import { InsightIcon } from './icons/InsightIcon';
import { ReportsIcon } from './icons/ReportsIcon';
import { ReviewsIcon } from './icons/ReviewsIcon';
import { SettingIcon } from './icons/SettingIcon';
import { UtilitiesIcon } from './icons/UtilitiesIcon';

export const data = [
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
    title: 'Documentation',
    icon: <DocIcon />,
    link: '/admin/documentation',
  },
  {
    title: 'Settings',
    icon: <SettingIcon />,
    link: '/admin/Settings',
  },
];
