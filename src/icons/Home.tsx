import { motion, MotionProps } from 'framer-motion';
import { cx } from '../../lib/classnames';

export const HomeIcon: React.FC<TwoColorIconProps & MotionProps> = ({
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
      className={cx('path-main', {
        'path--active': isActive,
      })}
      d="M18 44H10C9.46957 44 8.96086 43.7893 8.58579 43.4142C8.21071 43.0391 8 42.5304 8 42V22L24 6L40 22V42C40 42.5304 39.7893 43.0391 39.4142 43.4142C39.0391 43.7893 38.5304 44 38 44H30C29.4696 44 28.9609 43.7893 28.5858 43.4142C28.2107 43.0391 28 42.5304 28 42V34C28 33.4696 27.7893 32.9609 27.4142 32.5858C27.0391 32.2107 26.5304 32 26 32H22C21.4696 32 20.9609 32.2107 20.5858 32.5858C20.2107 32.9609 20 33.4696 20 34V42C20 42.5304 19.7893 43.0391 19.4142 43.4142C19.0391 43.7893 18.5304 44 18 44ZM24 26C25.0609 26 26.0783 25.5786 26.8284 24.8284C27.5786 24.0783 28 23.0609 28 22C28 20.9391 27.5786 19.9217 26.8284 19.1716C26.0783 18.4214 25.0609 18 24 18C22.9391 18 21.9217 18.4214 21.1716 19.1716C20.4214 19.9217 20 20.9391 20 22C20 23.0609 20.4214 24.0783 21.1716 24.8284C21.9217 25.5786 22.9391 26 24 26Z"
      fill={subFill || fill}
    />
    <path
      className={cx('path-sub', {
        'path--active': isActive,
      })}
      d="M24.0201 8.84006L7.42015 25.4401C7.23498 25.6265 7.0149 25.7747 6.77247 25.8761C6.53004 25.9776 6.27001 26.0302 6.00722 26.0312C5.74443 26.0321 5.48403 25.9813 5.24089 25.8816C4.99775 25.7818 4.77663 25.6352 4.59015 25.4501C4.40367 25.2649 4.25549 25.0448 4.15407 24.8024C4.05264 24.56 3.99996 24.2999 3.99904 24.0371C3.99811 23.7743 4.04895 23.5139 4.14866 23.2708C4.24836 23.0277 4.39498 22.8065 4.58015 22.6201L22.6201 4.58006C22.9949 4.20756 23.5018 3.99847 24.0301 3.99847C24.5585 3.99847 25.0654 4.20756 25.4401 4.58006L43.4201 22.6201C43.7941 22.9967 44.0031 23.5064 44.0013 24.0371C43.9994 24.5679 43.7868 25.0761 43.4101 25.4501C43.0335 25.824 42.5238 26.033 41.9931 26.0312C41.4623 26.0293 40.9541 25.8167 40.5802 25.4401L24.0201 8.84006Z"
      fill={mainFill || fill}
    />
  </motion.svg>
);
