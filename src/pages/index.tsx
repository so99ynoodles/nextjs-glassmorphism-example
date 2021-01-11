import styled from '@emotion/styled';
import { SearchInput } from '../components/SearchInput';
import { mq } from '../../lib/media-query';
import { GetStaticProps } from 'next';
import { getArticles } from '../utils/article/fs.server';
import { BlogCard } from '../components/BlogCard';
import { HtmlHead } from '../components/HtmlHead';
import { useLocale } from '../utils/useLocale';
import { AboutCard } from '../components/AboutCard';
import { sortArticlesByDateDesc } from '../utils/article/sorter';

const Container = styled.div`
  display: flex;
  width: 100%;

  @media ${mq.max.laptop} {
    flex-direction: column;
  }
`;

const HeadingSection = styled.section`
  padding: 0.5rem;
  width: 40%;

  @media ${mq.max.laptop} {
    padding: 2rem 1.5rem;
    order: 1;
    width: 100%;
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

  @media ${mq.max.laptop} {
    order: 2;
  }

  @media ${mq.max.tablet} {
    padding: 1rem 0.75rem;
  }

  @media ${mq.max.mobile} {
    padding: 0;
  }
`;

const SearchWrapper = styled.div`
  margin-bottom: 2rem;

  @media ${mq.max.laptop} {
    display: none;
  }
`;

interface HomePageProps {
  pickupArticles: Article[];
}

export const HomePage: React.FC<HomePageProps> = ({ pickupArticles }) => {
  const locale = useLocale();
  return (
    <>
      <HtmlHead title={locale.home} />
      <Container>
        <BlogSection>
          <SearchWrapper>
            <SearchInput placeholder={locale.search} />
          </SearchWrapper>
          <div>
            {pickupArticles.map((article) => (
              <BlogCard key={article.frontMatter.title} article={article} />
            ))}
          </div>
        </BlogSection>
        <HeadingSection>
          <AboutCard />
        </HeadingSection>
      </Container>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale = 'ja' }) => {
  const articles = await getArticles(`/posts/${locale}`);
  const pickupArticles = sortArticlesByDateDesc(articles);

  return {
    props: {
      pickupArticles,
    } as HomePageProps,
  };
};
