import { GetStaticProps } from 'next';
import { BlogCard } from '../../components/BlogCard';
import { HtmlHead } from '../../components/HtmlHead';
import { getArticles } from '../../utils/article/fs.server';
import { sortArticlesByDateDesc } from '../../utils/article/sorter';

type IndexPageProps = {
  articles: Article[];
};

export const IndexPage: React.FC<IndexPageProps> = ({ articles }) => {
  return (
    <>
      <HtmlHead title="Blog" />
      {articles.map((article) => (
        <BlogCard key={article.frontMatter.title} article={article} />
      ))}
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await getArticles(`/posts/${locale}`);
  const articlesSorted = sortArticlesByDateDesc(articles);

  return { props: { articles: articlesSorted } as IndexPageProps };
};
