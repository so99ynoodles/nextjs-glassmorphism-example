import styled from '@emotion/styled';
import { useHover, usePress } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useRouter } from 'next/router';
import { mq } from '../../../lib/media-query';

const TagItem = styled.span<{ isHovered?: boolean; noMargin?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  font-size: 0.875rem;
  color: #fff;
  border-radius: 9999px;
  background: ${(props) =>
    props.isHovered ? 'var(--tag-bg-color-hover)' : 'var(--tag-bg-color)'};
  font-weight: bold;
  transition: 0.3s background;
  cursor: pointer;

  @media ${mq.max.laptop} {
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.125rem 0.5rem;
  }

  margin-inline-end: ${(props) => (props.noMargin ? '0' : '0.5rem')};
  margin-block-end: ${(props) => (props.noMargin ? '0' : '0.5rem')};
`;

interface TagProps {
  tag: string;
  count?: number;
  noMargin?: boolean;
}

export const Tag: React.FC<TagProps> = ({ tag, count, noMargin }) => {
  const { push } = useRouter();
  const { hoverProps, isHovered } = useHover({});
  const { pressProps } = usePress({
    onPress: () => push(`/tags/${tag}`),
  });
  return (
    <TagItem
      {...mergeProps(hoverProps, pressProps)}
      isHovered={isHovered}
      noMargin={noMargin}
    >
      {tag}
      {count != null && ` (${count})`}
    </TagItem>
  );
};
