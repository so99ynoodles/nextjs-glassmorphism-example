import { motion } from 'framer-motion';

export const CheveronMenuIcon: React.FC<IconProps & { isOpen?: boolean }> = ({
  size = '1rem',
  fill,
  isOpen,
  className,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="path-main"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3 10.3C15.4926 10.1556 15.7308 10.0855 15.9709 10.1025C16.211 10.1196 16.4369 10.2227 16.6071 10.3929C16.7773 10.5631 16.8804 10.789 16.8975 11.0291C16.9146 11.2692 16.8444 11.5074 16.7 11.7L12.7 15.7C12.5131 15.8832 12.2618 15.9859 12 15.9859C11.7383 15.9859 11.4869 15.8832 11.3 15.7L7.30001 11.7C7.15558 11.5074 7.08546 11.2692 7.10252 11.0291C7.11959 10.789 7.22269 10.5631 7.3929 10.3929C7.56311 10.2227 7.78901 10.1196 8.02912 10.1025C8.26923 10.0855 8.50744 10.1556 8.70001 10.3L12 13.59L15.3 10.29V10.3Z"
      fill={fill}
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(360deg)',
        transformOrigin: 'center',
      }}
    />
  </svg>
);
