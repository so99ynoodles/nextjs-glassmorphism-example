export const MenuIcon: React.FC<IconProps> = ({ fill, size = '1rem' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10H40C40.5304 10 41.0391 10.2107 41.4142 10.5858C41.7893 10.9609 42 11.4696 42 12C42 12.5304 41.7893 13.0391 41.4142 13.4142C41.0391 13.7893 40.5304 14 40 14H8C7.46957 14 6.96086 13.7893 6.58579 13.4142C6.21071 13.0391 6 12.5304 6 12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10V10ZM8 22H40C40.5304 22 41.0391 22.2107 41.4142 22.5858C41.7893 22.9609 42 23.4696 42 24C42 24.5304 41.7893 25.0391 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26H8C7.46957 26 6.96086 25.7893 6.58579 25.4142C6.21071 25.0391 6 24.5304 6 24C6 23.4696 6.21071 22.9609 6.58579 22.5858C6.96086 22.2107 7.46957 22 8 22V22ZM8 34H40C40.5304 34 41.0391 34.2107 41.4142 34.5858C41.7893 34.9609 42 35.4696 42 36C42 36.5304 41.7893 37.0391 41.4142 37.4142C41.0391 37.7893 40.5304 38 40 38H8C7.46957 38 6.96086 37.7893 6.58579 37.4142C6.21071 37.0391 6 36.5304 6 36C6 35.4696 6.21071 34.9609 6.58579 34.5858C6.96086 34.2107 7.46957 34 8 34V34Z"
      fill={fill}
    />
  </svg>
);
