import styled from '@emotion/styled';
import { mq } from '../../../lib/media-query';

const TagItem = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  font-size: 0.875rem;
  color: #fff;
  border-radius: 9999px;
  background: var(--tag-bg-color);
  font-weight: bold;

  @media ${mq.max.laptop} {
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.125rem 0.5rem;
  }
`;

export const Tag: React.FC = ({ children }) => {
  return <TagItem>{children}</TagItem>;
};
