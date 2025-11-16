import { faBell, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CircleLinksProps {
  notificationCount?: number;
  userInitials?: string;
}

const CircleLinks: React.FC<CircleLinksProps> = ({
  notificationCount = 3,
  userInitials = 'JA',
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Search Icon */}
      <a
        href="/search"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
      </a>

      {/* Notification Icon with Badge */}
      <a
        href="/notifications"
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faBell} className="text-gray-600" />
        {notificationCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {notificationCount}
          </span>
        )}
      </a>

      {/* Help Icon */}
      <a
        href="/help"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-600" />
      </a>
    </div>
  );
};

export default CircleLinks;
