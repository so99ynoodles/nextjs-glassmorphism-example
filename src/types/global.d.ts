interface IconProps {
  fill?: string;
  size?: string;
  isActive?: boolean;
  className?: string;
}

interface TwoColorIconProps extends IconProps {
  mainFill?: string;
  subFill?: string;
}
