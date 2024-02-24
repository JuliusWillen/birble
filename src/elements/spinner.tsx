import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Spinner = () => {
  return <FontAwesomeIcon icon={faSpinner} spin className='size-fit p-5' />;
};
