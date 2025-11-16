import { HomeIcon } from '../../../dashboard/sidebar/icons/HomeIcon';
import { IntegrationsIcon } from '../../../dashboard/sidebar/icons/IntegrationsIcon';
import { UsersIcon } from '../../../dashboard/sidebar/icons/UsersIcon';

import {
  faCamera,
  faClipboard,
  faCloudMeatball,
  faDisplay,
  faGear,
  faHouse,
  faSitemap,
  faTable,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ---------------- Organisation ----------------
export const ManageIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faHouse} className={props.className} />
);

export const TagIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faTag} className={props.className} />
);

// ---------------- Utilities ----------------
export const ConfigurationIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faGear} className={props.className} />
);

export const HierarchyIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faSitemap} className={props.className} />
);

export const AssetsIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faClipboard} className={props.className} />
);

// ---------------- Carbon ----------------
export const CarbonConfigurationIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faGear} className={props.className} />
);

export const CarbonHierarchyIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faSitemap} className={props.className} />
);

export const InventoryItemsIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faTable} className={props.className} />
);

export const EmissionFactorsIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faCloudMeatball} className={props.className} />
);

export const SnapshotsIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faCamera} className={props.className} />
);

// ---------------- Displays ----------------
export const DisplayManageIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faDisplay} className={props.className} />
);

export const settingsMenu = [
  {
    section: 'Organisation',
    items: [
      { name: 'Manage', icon: HomeIcon, path: '/admin/settings/manage' },
      { name: 'Users', icon: UsersIcon, path: '/admin/settings/users' },
      { name: 'Tags', icon: TagIcon, path: '/admin/settings/tags' },
      { name: 'Integrations', icon: IntegrationsIcon, path: '/admin/settings/integrations' },
    ],
  },
  {
    section: 'Utilities',
    items: [
      { name: 'Configuration', icon: ConfigurationIcon, path: '/admin/settings/configuration' },
      { name: 'Hierarchy', icon: HierarchyIcon, path: '/admin/settings/hierarchy' },
      { name: 'Assets', icon: AssetsIcon, path: '/admin/settings/assets' },
    ],
  },
  {
    section: 'Carbon',
    items: [
      {
        name: 'Configuration',
        icon: ConfigurationIcon,
        path: '/admin/settings/carbon/configuration',
      },
      { name: 'Hierarchy', icon: HierarchyIcon, path: '/admin/settings/carbon/hierarchy' },
      {
        name: 'Inventory Items',
        icon: InventoryItemsIcon,
        path: '/admin/settings/carbon/inventory',
      },
      {
        name: 'Emission Factors',
        icon: EmissionFactorsIcon,
        path: '/admin/settings/carbon/emission',
      },
      { name: 'Snapshots', icon: SnapshotsIcon, disabled: true }, // Disabled item
    ],
  },
  {
    section: 'Displays',
    items: [{ name: 'Manage', icon: DisplayManageIcon, path: '/admin/settings/displays/manage' }],
  },
];
