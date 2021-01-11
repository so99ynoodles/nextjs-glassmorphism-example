const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData() {
  const postsDirectory = path.join(process.cwd(), 'public', '/posts/ja');
  const dirNames = fs.readdirSync(postsDirectory);
  const paths = dirNames.map((dir) => dir.replace(/\.mdx?/, ''));
  const posts = paths.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id: fileName,
      title: matterResult.data.title,
    };
  });
  return `export const posts = ${JSON.stringify(posts)}`;
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
