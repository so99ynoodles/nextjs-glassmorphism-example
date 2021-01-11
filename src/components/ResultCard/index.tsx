import styled from '@emotion/styled';
import { mergeProps } from '@react-aria/utils';
import { useHover, usePress } from '@react-aria/interactions';
import { useRouter } from 'next/router';
import { Card } from '../Card';
import { useLocale } from '../../utils/useLocale';
import { getDate } from '../../utils/article/entity';

const StyledCard = styled(Card)`
  margin-top: 1rem;

  p {
    color: var(--font-color-sub);
  }
`;

interface ResultCardProps {
  result?: {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
  };
  error?: boolean;
  onClose?: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  error,
  onClose,
}) => {
  const { push, locale } = useRouter();
  const lang = useLocale();
  const { pressProps } = usePress({
    onPress: () => {
      push(`/blog/posts/${result.slug}`, undefined, { locale });
      onClose();
    },
  });
  const { hoverProps } = useHover({});
  return (
    <StyledCard tabIndex={0} {...mergeProps(hoverProps, pressProps)}>
      {error ? (
        <p>{lang.noSearchResult}</p>
      ) : (
        <>
          <h3>{result.title}</h3>
          <p>{getDate(result.date, locale)}</p>
        </>
      )}
    </StyledCard>
  );
};
