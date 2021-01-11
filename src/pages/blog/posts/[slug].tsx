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
import styled from '@emotion/styled';
import { useLocale } from '../../../utils/useLocale';
import { mq } from '../../../../lib/media-query';
import {
  ShareButtons,
  ShareButtonsHorizontal,
} from '../../../components/ShareButtons';
import { BlogThumbnail } from '../../../components/BlogThumbnail';
import { generateCache } from '../../../utils/article/cache';

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SocialShare = styled.div`
  position: fixed;
  top: 6rem;
  left: 9rem;
  width: 4rem;
  background: rgba(var(--bg-color), 0.4);
  border-radius: 1.5rem;
  box-shadow: var(--box-shadow-required);
  border: 2px solid var(--border-color);
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h5 {
    color: var(--font-color-sub);
  }

  @media ${mq.max.laptop} {
    display: none;
  }
`;

const RelatedArticles = styled.div`
  position: fixed;
  top: 6rem;
  right: -1.5rem;
  width: 15rem;
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  box-shadow: var(--box-shadow-required);
  border: 2px solid var(--border-color);
  padding: 1rem;
  backdrop-filter: blur(0.25rem);

  h5 {
    color: var(--font-color-sub);
    margin: 1rem 0 0.5rem 0;
  }

  @media ${mq.max.desktop} {
    position: relative;
    top: 1rem;
    right: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const Content = styled.div`
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  box-shadow: var(--box-shadow-required);
  border: 2px solid var(--border-color);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${mq.max.tablet} {
    padding: 0;
  }
`;

const Blog = styled.div`
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-required);
  max-width: 40rem;
  padding: 1rem 2rem;

  @media ${mq.max.laptop} {
    max-width: 100%;
    padding: 1rem;
  }

  @media ${mq.max.mobile} {
    border: none;
  }
`;

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
  const locale = useLocale();
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
      <ContentWrapper>
        <SocialShare>
          <ShareButtons title={title} urlBlog={blogUrl} />
        </SocialShare>
        <Content>
          <Blog>
            <ArticleDetail contentHtml={content} />
            <ShareButtonsHorizontal title={title} urlBlog={blogUrl} />
          </Blog>
        </Content>
        <RelatedArticles>
          <h5>{locale.relatedArticles}</h5>
          {relatedArticles.map((article) => (
            <BlogThumbnail key={article.slug} article={article} />
          ))}
          {prevArticle && (
            <>
              <h5>{locale.prevArticle}</h5>
              <BlogThumbnail article={prevArticle} />
            </>
          )}
          {nextArticle && (
            <>
              <h5>{locale.nextArticle}</h5>
              <BlogThumbnail article={nextArticle} />
            </>
          )}
        </RelatedArticles>
      </ContentWrapper>
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
