import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const HomeIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faHome} className={props.className} />
);
