import { MotionProps, motion } from 'framer-motion';
import { cx } from '../../lib/classnames';

export const DocumentIcon: React.FC<TwoColorIconProps & MotionProps> = ({
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
      d="M12 4H24V16C24 18.2 25.8 20 28 20H40V40C40 41.0609 39.5786 42.0783 38.8284 42.8284C38.0783 43.5786 37.0609 44 36 44H12C10.9391 44 9.92172 43.5786 9.17157 42.8284C8.42143 42.0783 8 41.0609 8 40V8C8 5.8 9.8 4 12 4ZM16 26C15.4696 26 14.9609 26.2107 14.5858 26.5858C14.2107 26.9609 14 27.4696 14 28C14 28.5304 14.2107 29.0391 14.5858 29.4142C14.9609 29.7893 15.4696 30 16 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28C34 27.4696 33.7893 26.9609 33.4142 26.5858C33.0391 26.2107 32.5304 26 32 26H16ZM16 34C15.4696 34 14.9609 34.2107 14.5858 34.5858C14.2107 34.9609 14 35.4696 14 36C14 36.5304 14.2107 37.0391 14.5858 37.4142C14.9609 37.7893 15.4696 38 16 38H24C24.5304 38 25.0391 37.7893 25.4142 37.4142C25.7893 37.0391 26 36.5304 26 36C26 35.4696 25.7893 34.9609 25.4142 34.5858C25.0391 34.2107 24.5304 34 24 34H16Z"
      fill={subFill || fill}
    />
    <path
      className={cx('path-main', {
        'path--active': isActive,
      })}
      d="M28 4L40 16H28V4Z"
      fill={mainFill || fill}
    />
  </motion.svg>
);
