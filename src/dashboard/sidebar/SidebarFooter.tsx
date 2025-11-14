import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../Provider';

export function SidebarFooter() {
  const { sidebarOpen } = useDashboardContext();

  return (
    <div className="sticky bottom-0 z-10 mb-6">
      <ul className="md:pl-5">
        <li>
          <Link to="/admin/settings">
            <span className="flex flex-col items-center my-2 p-4 w-full hover:text-white">
              <FontAwesomeIcon icon={faGear} size="lg" className="text-green-700" />
              {sidebarOpen ? (
                <span className="mt-1 text-sm text-green-700">Settings</span>
              ) : (
                <span className="sr-only">Settings</span>
              )}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
