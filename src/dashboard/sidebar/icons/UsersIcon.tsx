import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const UsersIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faUsers} className={props.className} />
);
