import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import React from 'react';
import { mq } from '../../../lib/media-query';
import { BlogCard } from '../../components/BlogCard';
import { HtmlHead } from '../../components/HtmlHead';
import { Tag } from '../../components/Tag';
import { getArticles } from '../../utils/article/fs.server';
import { sortArticlesByDateDesc } from '../../utils/article/sorter';
import {
  comparatorTagCount,
  getArrayOfTagAndCountFromTable,
  getTableWithTagAndCountIncludedInArticles,
  TagAndCount,
} from '../../utils/article/tag';
import { useLocale } from '../../utils/useLocale';

type IndexPageProps = {
  articles: Article[];
  tags: TagAndCount[];
};

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 80%;

  @media ${mq.max.laptop} {
    width: 100%;
  }
`;

const SideContent = styled.div`
  position: fixed;
  top: 4rem;
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

  @media ${mq.max.laptop} {
    width: 100%;
    position: relative;
    right: 0;
    top: 2rem;
  }
`;

export const IndexPage: React.FC<IndexPageProps> = ({ articles, tags }) => {
  const locale = useLocale();
  return (
    <>
      <HtmlHead title={locale.blog} />
      <ContentWrapper>
        <Content>
          {articles.map((article) => (
            <BlogCard key={article.frontMatter.title} article={article} />
          ))}
        </Content>
        <SideContent>
          <h5>{locale.tags}</h5>
          {tags.map((tag) => (
            <Tag key={tag.tag} tag={tag.tag} count={tag.count} />
          ))}
        </SideContent>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale = 'ja' }) => {
  const articles = await getArticles(`/posts/${locale}`);
  const articlesSorted = sortArticlesByDateDesc(articles);
  const tagAndCountTable = getTableWithTagAndCountIncludedInArticles(articles);
  const tags = getArrayOfTagAndCountFromTable(
    tagAndCountTable,
    comparatorTagCount
  );

  return {
    props: { articles: articlesSorted, tags } as IndexPageProps,
  };
};
