import { useLocation } from 'react-router-dom';
import { settingsMenu } from '../pages/admin/settings/settingsMenuData';
import CircleLinks from './CircleLinks';
import { useDashboardContext } from './Provider';
import TenantDropdown from './TenantDropdown';
import UserDropdownMenu from './UserDropdownMenu';
const tenants = [
  { id: 1, name: 'Adhesif Labels Ltd', initials: 'AL' },
  { id: 2, name: 'AIA Services New Zealand Ltd', initials: 'AS' },
  { id: 3, name: 'Air New Zealand Ltd', initials: 'AN' },
  { id: 4, name: 'All Blacks Organization', initials: 'AB' },
  { id: 5, name: 'All Hands Demo Limited', initials: 'AH' },
];

export function TopBar() {
  const { openSidebar } = useDashboardContext();
  const location = useLocation();

  const handleTenantChange = (tenantName: string) => {
    console.log('Selected Tenant:', tenantName);
    // You can add logic here to update global state or API calls
  };

  const activeItem = settingsMenu.flatMap(s => s.items).find(i => i.path === location.pathname);

  return (
    <header className="relative z-10 h-16 w-full items-center bg-white shadow md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={openSidebar}
                className="text-4xl text-black focus:outline-none hidden"
              >
                &#8801;
              </button>

              <TenantDropdown
                tenants={tenants}
                defaultTenant="ABC Group Ltd"
                onTenantChange={handleTenantChange}
              />

              {activeItem && (
                <div className="flex items-center space-x-2">
                  <activeItem.icon className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700 font-medium whitespace-nowrap">
                    {activeItem.name}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <CircleLinks />
            <UserDropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
