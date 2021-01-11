import fs from 'fs';
import { getArticles } from './fs.server';
import { getTagsIncludedInArticles } from './tag';

export const generateCache = async (contentDir: string) => {
  const articles = (await getArticles(contentDir)) || [];
  const tags = getTagsIncludedInArticles(articles) || [];
  const searchables = [
    ...articles.map((article) => ({
      id: article.slug,
      type: 'article',
      title: article.frontMatter.title,
    })),
    ...tags.map((tag) => ({ id: tag, type: 'tag', title: tag })),
  ];

  const content = `export const searchables = ${JSON.stringify(searchables)}`;

  try {
    fs.readdirSync('cache');
  } catch (e) {
    fs.mkdirSync('cache');
  }

  fs.writeFile('cache/data.js', content, function (err) {
    if (err) return console.log(err);
    console.log('Posts cached.');
  });
};
