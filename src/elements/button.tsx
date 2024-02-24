import classNames from 'classnames';
import { Spinner } from './spinner';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
  icon?: IconDefinition;
  text?: string;
  isLoading: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
};

export const Button = ({ text, isLoading, onClick, disabled, className, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled ?? isLoading}
      type={type ?? 'button'}
      className={classNames(
        'rounded-lg shadow-lg py-2 px-5 bg-teal-600 hover:bg-teal-800 transition-all duration-300 text-white',
        className,
        { 'cursor-not-allowed opacity-50': disabled ?? isLoading }
      )}
    >
      <div className='flex justify-center items-center gap-5'>{isLoading ? <Spinner /> : text}</div>
    </button>
  );
};

export const RoundButton = ({
  icon,
  isLoading,
  onClick,
  disabled,
  className,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled ?? isLoading}
      type={type ?? 'button'}
      className={classNames(
        'rounded-full shadow-lg p-2 bg-teal-600 hover:bg-teal-800 transition-all duration-100 text-white',
        className,
        { 'cursor-not-allowed opacity-50': disabled ?? isLoading }
      )}
    >
      <div className='flex items-center justify-center'>
        {isLoading && <Spinner />}
        {!isLoading && icon && <FontAwesomeIcon icon={icon} className='size-fit p-5' />}
      </div>
    </button>
  );
};
