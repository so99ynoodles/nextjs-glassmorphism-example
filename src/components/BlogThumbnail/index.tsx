import styled from '@emotion/styled';
import { mergeProps } from '@react-aria/utils';
import { usePress, useHover } from '@react-aria/interactions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { mq } from '../../../lib/media-query';

const Card = styled.div`
  position: relative;
  border-radius: 2rem;
  background: rgba(var(--bg-color), 0.6);
  box-shadow: var(--box-shadow-lg);
  padding: 1rem;
  border: 1px solid var(--border-color);
  width: 100%;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
`;

const MobileImageContainer = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  margin-right: 1rem;

  @media ${mq.max.tablet} {
    display: flex;
  }
`;

interface BlogThumbnailProps {
  article: Article;
}

export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ article }) => {
  const { push, locale } = useRouter();
  const { pressProps } = usePress({
    onPress: () => push(`/blog/posts/${article.slug}`, undefined, { locale }),
  });
  const { hoverProps } = useHover({});
  return (
    <Card tabIndex={0} {...mergeProps(pressProps, hoverProps)}>
      <MobileImageContainer>
        {article.frontMatter.image ? (
          <Image src={article.frontMatter.image} width={32} height={32} />
        ) : (
          article.frontMatter.emoji
        )}
      </MobileImageContainer>
      <strong>{article.frontMatter.title}</strong>
    </Card>
  );
};
