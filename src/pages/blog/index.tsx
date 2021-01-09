import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getArticles } from '../../utils/article/fs.server';
import { sortArticlesByDateDesc } from '../../utils/article/sorter';

type IndexPageProps = {
  articles: Article[];
};

export const IndexPage: React.FC<IndexPageProps> = ({ articles }) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      blog
      {articles.map((a) => JSON.stringify(a))}
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles('/posts');
  const articlesSorted = sortArticlesByDateDesc(articles);

  return { props: { articles: articlesSorted } as IndexPageProps };
};
