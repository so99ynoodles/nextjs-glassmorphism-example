import { motion, MotionProps } from 'framer-motion';
import { cx } from '../../lib/classnames';

export const UserIcon: React.FC<TwoColorIconProps & MotionProps> = ({
  fill,
  mainFill,
  subFill,
  size = '1rem',
  isActive,
  ...props
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className={cx('path-sub', {
        'path--active': isActive,
      })}
      d="M24 24C21.3478 24 18.8043 22.9464 16.9289 21.0711C15.0536 19.1957 14 16.6522 14 14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14C34 16.6522 32.9464 19.1957 31.0711 21.0711C29.1957 22.9464 26.6522 24 24 24Z"
      fill={subFill || fill}
    />
    <path
      className={cx('path-main', {
        'path--active': isActive,
      })}
      d="M42 40V38C42 35.3478 40.9464 32.8043 39.0711 30.9289C37.1957 29.0536 34.6522 28 32 28H16C13.3478 28 10.8043 29.0536 8.92893 30.9289C7.05357 32.8043 6 35.3478 6 38V40C6 42.2 7.8 44 10 44H38C39.0609 44 40.0783 43.5786 40.8284 42.8284C41.5786 42.0783 42 41.0609 42 40Z"
      fill={mainFill || fill}
    />
  </motion.svg>
);
