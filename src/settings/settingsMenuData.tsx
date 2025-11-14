/**
 * Local lightweight SVG icon components to avoid depending on '@heroicons/react'
 * Each accepts an optional className so existing usage (<item.icon className="..."/>) still works.
 */
export const Cog6ToothIcon = (props: { className?: string }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19 12a1 1 0 00.9-.6l.6-1.2-1.6-2.2-.9.4A7 7 0 0013 6l-.2-1.1H11.2L11 6a7 7 0 00-4 2.4l-.9-.4L4.5 8.2l.6 1.2A1 1 0 006 12a1 1 0 00-.6.9l-1.2.6 1.6 2.2.9-.4A7 7 0 0011 18l.2 1.1h1.6L13 18a7 7 0 004-2.4l.9.4 1.6-2.2-1.2-.6A1 1 0 0019 12z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const UserIcon = (props: { className?: string }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const TagIcon = (props: { className?: string }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12v6a2 2 0 002 2h6l10-10-8-8L2 12z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
  </svg>
);

export const Squares2X2Icon = (props: { className?: string }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.25" fill="none" />
    <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.25" fill="none" />
    <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.25" fill="none" />
    <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.25" fill="none" />
  </svg>
);

export const CubeIcon = (props: { className?: string }) => (
  <svg
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3l9 5.2v7.6L12 21 3 15.8V8.2L12 3z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 3v18"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M21 8.2l-9 5.8-9-5.8"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
export const settingsMenu = [
  {
    section: 'Organisation',
    items: [
      { name: 'Manage', icon: Squares2X2Icon, path: '/settings/manage' },
      { name: 'Users', icon: UserIcon, path: '/settings/users' },
      { name: 'Tags', icon: TagIcon, path: '/settings/tags' },
      { name: 'Integrations', icon: Cog6ToothIcon, path: '/settings/integrations' },
    ],
  },
  {
    section: 'Utilities',
    items: [
      { name: 'Configuration', icon: Cog6ToothIcon, path: '/settings/configuration' },
      { name: 'Hierarchy', icon: CubeIcon, path: '/settings/hierarchy' },
      { name: 'Assets', icon: Squares2X2Icon, path: '/settings/assets' },
    ],
  },
  {
    section: 'Carbon',
    items: [
      { name: 'Configuration', icon: Cog6ToothIcon, path: '/settings/carbon/configuration' },
      { name: 'Hierarchy', icon: CubeIcon, path: '/settings/carbon/hierarchy' },
      { name: 'Inventory Items', icon: Squares2X2Icon, path: '/settings/carbon/inventory' },
      { name: 'Emission Factors', icon: Squares2X2Icon, path: '/settings/carbon/emission' },
    ],
  },
];
