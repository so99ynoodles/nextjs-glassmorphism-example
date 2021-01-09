import styled from '@emotion/styled';
import Image from 'next/image';
import { useHover, usePress } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { motion, MotionProps } from 'framer-motion';
import { CheveronRightIcon } from '../../assets/icons/CheveronRight';
import { mq } from '../../../lib/media-query';
import { getDateFormatted } from '../../utils/article/entity';
import { Tag } from '../Tag';

interface BlogCardProps extends MotionProps {
  onPress?: () => void;
  article: Article;
}

const Card = styled<any>(motion.div)`
  position: relative;
  border-radius: 2rem;
  background: rgba(var(--bg-color), 0.4);
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
  h3 {
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

export const BlogCard: React.FC<BlogCardProps> = ({
  article,
  onPress,
  ...motionProps
}) => {
  const { pressProps, isPressed } = usePress({ onPress });
  const { hoverProps, isHovered } = useHover({});
  return (
    <Card
      key={article.frontMatter.title}
      {...mergeProps(pressProps, hoverProps)}
      animate={isPressed ? 'isPressed' : isHovered ? 'isHovered' : 'default'}
      variants={{
        default: { scale: 1 },
        isHovered: { scale: 1.05 },
        isPressed: { scale: 0.95 },
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      {...motionProps}
    >
      <ImageContainer>
        {article.frontMatter.image ? (
          <Image src={article.frontMatter.image} width={32} height={32} />
        ) : (
          article.frontMatter.emoji
        )}
      </ImageContainer>
      <Content>
        <div>
          <MobileImageContainer>
            {article.frontMatter.image ? (
              <Image src={article.frontMatter.image} width={32} height={32} />
            ) : (
              article.frontMatter.emoji
            )}
          </MobileImageContainer>
          <h3>{article.frontMatter.title}</h3>
        </div>
        <p>
          <DateText>{getDateFormatted(article)}</DateText>
          {article.frontMatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </p>
      </Content>
      <Cheveron>
        <CheveronRightIcon size="2rem" fill="var(--font-color-sub)" />
      </Cheveron>
    </Card>
  );
};
