import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const IntegrationsIcon = (props: { className?: string }) => (
  <FontAwesomeIcon icon={faPuzzlePiece} className={props.className} />
);
