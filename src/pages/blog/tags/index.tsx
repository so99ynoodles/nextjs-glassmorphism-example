import React from 'react';
import { GetStaticProps } from 'next';
import { FaHome, FaPencilAlt } from 'react-icons/fa';
import { getArticles } from '../../../utils/article/fs.server';
import {
  comparatorTagCount,
  comparatorTagName,
  getArrayOfTagAndCountFromTable,
  getTableWithTagAndCountIncludedInArticles,
  TagAndCount,
} from '../../../utils/article/tag';

type IndexPageProps = {
  orderByName: TagAndCount[];
  orderByCount: TagAndCount[];
};

export const IndexPage: React.FC<IndexPageProps> = ({
  orderByName,
  orderByCount,
}) => <></>;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles('/posts');
  const tagAndCountTable = getTableWithTagAndCountIncludedInArticles(articles);
  const orderByName = getArrayOfTagAndCountFromTable(
    tagAndCountTable,
    comparatorTagName
  );
  const orderByCount = getArrayOfTagAndCountFromTable(
    tagAndCountTable,
    comparatorTagCount
  );

  return { props: { orderByName, orderByCount } as IndexPageProps };
};
