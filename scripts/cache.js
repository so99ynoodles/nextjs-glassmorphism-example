const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const locales = ['ja', 'en', 'ko'];

function postData() {
  const localPosts = locales.reduce((acc, locale) => {
    const postsDirectory = path.join(
      process.cwd(),
      'public',
      '/posts/' + locale
    );
    const dirNames = fs.readdirSync(postsDirectory);
    const paths = dirNames.map((dir) => dir.replace(/\.mdx?/, ''));
    const posts = paths.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName, 'index.md');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug: fileName,
        title: matterResult.data.title,
        excerpt: matterResult.excerpt,
        date: matterResult.data.date,
      };
    });
    acc[locale] = posts;
    return acc;
  }, {});

  return `export const posts = ${JSON.stringify(localPosts)}`;
}

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) return console.log(err);
  console.log('Posts cached!');
});
