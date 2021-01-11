import styled from '@emotion/styled';
import Image from 'next/image';
import { useHover, usePress } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { CheveronRightIcon } from '../../assets/icons/CheveronRight';
import { mq } from '../../../lib/media-query';
import { getDateFormatted } from '../../utils/article/entity';
import { Tag } from '../Tag';
import { useRouter } from 'next/router';

interface BlogCardProps {
  article: Article;
}

const Card = styled.div`
  position: relative;
  border-radius: 2rem;
  background: rgba(var(--bg-color), 0.6);
  box-shadow: var(--box-shadow-lg);
  padding: 1rem 2.5rem 1rem 1.25rem;
  border: 1px solid var(--border-color);
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  margin-right: 1rem;

  @media ${mq.max.tablet} {
    display: none;
  }
`;

const MobileImageContainer = styled(ImageContainer)`
  display: none;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  margin-right: 0;
  margin-bottom: 0.5rem;

  @media ${mq.max.tablet} {
    display: flex;
  }
`;

const Content = styled.div`
  strong {
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 2rem;
    color: var(--font-color-main);
    margin-bottom: 0.5rem;

    @media ${mq.max.laptop} {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }
  }

  p {
    span + span {
      margin-left: 0.65rem;
    }
  }
`;

const DateText = styled.span`
  font-size: 0.875rem;
  font-weight: 900;
  color: var(--font-color-help);
`;

const Cheveron = styled.div`
  position: absolute;
  right: 0.5rem;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
`;

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const { push, locale } = useRouter();
  const { pressProps } = usePress({
    onPress: () => push(`/blog/posts/${article.slug}`, undefined, { locale }),
  });
  const { hoverProps } = useHover({});
  return (
    <Card
      key={article.slug}
      tabIndex={0}
      {...mergeProps(pressProps, hoverProps)}
    >
      <ImageContainer>
        {article.frontMatter.image ? (
          <Image src={article.frontMatter.hero} width={32} height={32} />
        ) : (
          article.frontMatter.emoji
        )}
      </ImageContainer>
      <Content>
        <div>
          <MobileImageContainer>
            {article.frontMatter.image ? (
              <Image src={article.frontMatter.hero} width={32} height={32} />
            ) : (
              article.frontMatter.emoji
            )}
          </MobileImageContainer>
          <strong>{article.frontMatter.title}</strong>
        </div>
        <p>
          <DateText>
            {getDateFormatted(article, 'MMM do (yyyy)', locale)}
          </DateText>
          {article.frontMatter.tags.map((tag) => (
            <Tag key={tag} tag={tag} noMargin />
          ))}
        </p>
      </Content>
      <Cheveron>
        <CheveronRightIcon size="2rem" fill="var(--font-color-sub)" />
      </Cheveron>
    </Card>
  );
};
