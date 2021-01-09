import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Svg = styled(motion.svg)`
  path {
    fill: var(--icon-color-inactive-main);
  }
  &:hover {
    path {
      fill: #1da1f2;
    }
  }
`;

export const TwitterIcon: React.FC<IconProps> = ({ size = '1rem', fill }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{
        scale: 1.2,
        rotate: 10,
      }}
    >
      <path
        d="M24 0C10.7472 0 0 10.7472 0 24C0 37.2528 10.7472 48 24 48C37.2528 48 48 37.2528 48 24C48 10.7472 37.2528 0 24 0ZM34.9581 18.7126C34.9687 18.9489 34.9739 19.1862 34.9739 19.4246C34.9739 26.7037 29.4331 35.0977 19.3004 35.098H19.3008H19.3004C16.1895 35.098 13.2946 34.1862 10.8567 32.6235C11.2877 32.6744 11.7264 32.6997 12.1707 32.6997C14.7517 32.6997 17.127 31.8193 19.0126 30.3417C16.6011 30.297 14.5679 28.7043 13.8662 26.5155C14.202 26.58 14.5474 26.6151 14.9015 26.6151C15.4043 26.6151 15.8914 26.5474 16.3542 26.421C13.8336 25.9164 11.9348 23.6887 11.9348 21.0212C11.9348 20.9963 11.9348 20.974 11.9355 20.9509C12.6779 21.3636 13.5267 21.6119 14.4305 21.6398C12.9514 20.6528 11.9791 18.9657 11.9791 17.0544C11.9791 16.0452 12.252 15.0996 12.7251 14.2855C15.4417 17.6188 19.5015 19.8109 24.0798 20.0413C23.9854 19.6377 23.9366 19.2173 23.9366 18.7852C23.9366 15.7441 26.4038 13.277 29.4459 13.277C31.0305 13.277 32.4617 13.9468 33.4669 15.0176C34.7219 14.77 35.9004 14.3115 36.965 13.6805C36.553 14.9663 35.6799 16.0452 34.5425 16.7274C35.6569 16.5941 36.7189 16.2986 37.7058 15.8599C36.9686 16.9647 36.0337 17.9352 34.9581 18.7126V18.7126Z"
        fill={fill}
      />
    </Svg>
  );
};