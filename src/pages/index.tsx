import styled from '@emotion/styled';
import Head from 'next/head';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { GithubIcon } from '../assets/icons/Github';
import { TwitterIcon } from '../assets/icons/Twitter';
import { SearchInput } from '../components/SearchInput';
import { mq } from '../../lib/media-query';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { getArticle } from '../utils/article/fs.server';
import { BlogCard } from '../components/BlogCard';
import { HtmlHead } from '../components/HtmlHead';

const Container = styled.div`
  display: flex;
  width: 100%;

  @media ${mq.max.laptop} {
    flex-direction: column;
  }
`;

const HeadingSection = styled.section`
  padding: 2rem;
  width: 100%;

  @media ${mq.max.laptop} {
    padding: 2rem 1.5rem;
  }

  @media ${mq.max.tablet} {
    padding: 1.5rem 1rem;
  }

  @media ${mq.max.mobile} {
    padding: 1rem 0.5rem;
  }
`;

const BlogSection = styled.section`
  padding: 0.5rem;
  width: 100%;

  @media ${mq.max.tablet} {
    padding: 1rem 0.75rem;
  }

  @media ${mq.max.mobile} {
    padding: 0;
  }
`;

const SubHeading = styled(motion.h3)`
  color: var(--font-color-sub);
  font-size: 3em;

  @media ${mq.max.laptop} {
    font-size: 1.125rem;
  }
`;

const Heading = styled(motion.h1)`
  color: var(--font-color-main);
  font-size: 4rem;

  @media ${mq.max.laptop} {
    font-size: 2rem;
  }
`;

const SearchWrapper = styled(motion.div)`
  margin-bottom: 2rem;

  @media ${mq.max.laptop} {
    display: none;
  }
`;

const Links = styled(motion.ul)`
  margin-top: 3rem;
  display: flex;

  * + * {
    margin-left: 0.5rem;
  }

  @media ${mq.max.laptop} {
    margin-top: 1rem;
  }
`;

interface HomePageProps {
  pickupArticles: Article[];
}

export const HomePage: React.FC<HomePageProps> = ({ pickupArticles }) => {
  return (
    <>
      <HtmlHead />
      <Container>
        <HeadingSection>
          <SubHeading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Hi, I'm a
          </SubHeading>
          <Heading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Developer.
          </Heading>
          <Links
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/so99ynoodles"
              >
                <GithubIcon size="2rem" />
                <VisuallyHidden elementType="span">Github Page</VisuallyHidden>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/so99ynoodles"
              >
                <TwitterIcon size="2rem" />
                <VisuallyHidden elementType="span">Twitter Page</VisuallyHidden>
              </a>
            </li>
          </Links>
        </HeadingSection>
        <BlogSection>
          <SearchWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            <SearchInput />
          </SearchWrapper>
          <motion.div
            variants={{
              hide: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delay: 1.2,
                  duration: 0.3,
                  staggerChildren: 0.4,
                  delayChildren: 1,
                },
              },
            }}
            initial="hide"
            animate="show"
          >
            {pickupArticles.map((article) => (
              <BlogCard
                key={article.frontMatter.title}
                article={article}
              ></BlogCard>
            ))}
          </motion.div>
        </BlogSection>
      </Container>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const pickupArticles = await Promise.all(
    ['example', 'example2', 'example3', 'example4'].map(
      async (slug) => await getArticle(slug, '/posts')
    )
  );

  return {
    props: {
      pickupArticles,
    } as HomePageProps,
  };
};
