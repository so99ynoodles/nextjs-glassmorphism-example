import styled from '@emotion/styled';
import { mq } from '../../../lib/media-query';

interface ResponsiveProps {
  mobile?: boolean;
  tablet?: boolean;
  laptop?: boolean;
  desktop?: boolean;
}

const ResponsiveContainer = styled.div<ResponsiveProps>`
  display: none;
  width: inherit;
  height: inherit;

  ${(props) =>
    props.mobile &&
    `
    @media ${mq.max.mobile} {
        display: block;
    }
  `}
  ${(props) =>
    props.tablet &&
    `
    @media ${mq.min.mobile} and ${mq.max.tablet} {
        display: block;
    }
  `}
  ${(props) =>
    props.laptop &&
    `
    @media ${mq.min.tablet} and ${mq.max.laptop} {
        display: block;
    }
  `}
  ${(props) =>
    props.desktop &&
    `
    @media ${mq.min.laptop} {
        display: block;
    }
  `}
`;

export const Responsive: React.FC<ResponsiveProps> = ({
  children,
  ...props
}) => {
  return <ResponsiveContainer {...props}>{children}</ResponsiveContainer>;
};
