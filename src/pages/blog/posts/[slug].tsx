import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article, stripContent } from '../../../utils/article/entity';
import {
  getArticle,
  getArticles,
  getDirNamesThatHaveMdx,
} from '../../../utils/article/fs.server';
import { hydrate } from '../../../utils/article/markdown';
import { renderToString } from '../../../utils/article/markdown.server';
import {
  getPrevAndNextArticle,
  getRelatedArticles,
} from '../../../utils/article/related';
import { HtmlHead } from '../../../components/HtmlHead';
import { ArticleDetail } from '../../../components/ArticleDetail';

type BlogPostProps = {
  article: Article;
  contentHtml: string;
  relatedArticles: Article[];
  prevArticle?: Article;
  nextArticle?: Article;
};

export const BlogPost: React.FC<BlogPostProps> = ({
  article,
  contentHtml,
  relatedArticles,
  prevArticle,
  nextArticle,
}) => {
  const { slug } = article;
  const { title, tags, hero } = article.frontMatter;
  const blogUrl = `/blog/posts/${slug}`;
  const contentBaseUrl = `/posts/${slug}`;

  const content = hydrate(contentHtml, contentBaseUrl);
  const ogImage = hero ? { image: `${contentBaseUrl}/${hero}` } : null;

  return (
    <>
      <HtmlHead
        title={title}
        description={article.excerpt}
        url={blogUrl}
        {...ogImage}
      />
      <ArticleDetail contentHtml={content} />
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const path = (locales || ['ja'])
    .map((locale) => {
      const dirNamesThatHaveMdx = getDirNamesThatHaveMdx(`/posts/${locale}`);
      const paths = dirNamesThatHaveMdx.map((dir) => ({
        params: { slug: dir.replace(/\.mdx?/, '') },
        // locale,
      }));
      return paths;
    })
    .flat();

  return {
    fallback: false,
    paths: path,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'ja',
}) => {
  const slug = params.slug as string;
  const { content, ...article } = await getArticle(slug, `/posts/${locale}`);
  const contentHtml = await renderToString(
    content,
    `/posts/${locale}/${params.slug}`
  );

  const articles = await getArticles(`/posts/${locale}`);
  const _relatedArticles = getRelatedArticles(article, articles);
  const relatedArticles = _relatedArticles.map((r) => stripContent(r));

  const { prevArticle, nextArticle } = getPrevAndNextArticle(article, articles);

  return {
    props: {
      article,
      contentHtml,
      relatedArticles,
      prevArticle,
      nextArticle,
    },
  };
};
