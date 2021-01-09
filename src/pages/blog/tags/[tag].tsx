import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article } from '../../../utils/article/entity';
import { getArticles } from '../../../utils/article/fs.server';
import { getTagsIncludedInArticles } from '../../../utils/article/tag';
import { filterArticleByTag } from '../../../utils/article/filter';
import { sortArticlesByDateDesc } from '../../../utils/article/sorter';

type TagPageProps = {
  tag: string;
  articles: Article[];
};

export const TagPage: React.FC<TagPageProps> = ({ tag, articles }) => {
  const title = `#${tag}`;
  const tagUrl = `/blog/tag/${encodeURIComponent(tag)}`;

  return <>{tag}</>;
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles('/posts');
  const tags = getTagsIncludedInArticles(articles);
  const paths = tags.map((tag) => ({
    params: { tag: encodeURIComponent(tag) },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag as string;

  const articles = await getArticles('/posts');
  const articlesFilteredByTag = filterArticleByTag(articles, tag);
  const articlesSorted = sortArticlesByDateDesc(articlesFilteredByTag);

  return { props: { tag, articles: articlesSorted } as TagPageProps };
};
