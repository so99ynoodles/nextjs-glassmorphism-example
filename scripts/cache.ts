import fs from 'fs';
import { getArticles } from '../src/utils/article/fs.server';

const fileContents = `export const posts = ${getArticles('/posts/ja')}`;

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', fileContents, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Posts Cached');
});
