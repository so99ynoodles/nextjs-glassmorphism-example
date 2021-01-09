export const LogoIcon: React.FC<IconProps> = ({ size = '1rem', fill }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.8507 38.728H25.0707V33.616L27.9147 30.376L32.8107 38.728H38.5347L30.9747 26.884L37.8867 18.568H32.0907L25.2147 27.244H25.0707V10H19.8507V19.916V24.092V38.728Z"
      fill={fill}
    />
    <path
      d="M11.844 38.728H17.136V33.02V24.092H19.8507V19.916H17.136V14.48H12.744L12.132 19.916L9 20.168V24.092H11.844V33.02V38.728Z"
      fill={fill}
    />
  </svg>
);
