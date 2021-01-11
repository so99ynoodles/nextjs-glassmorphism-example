import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//Finding directory named "posts" from the current working directory of Node.
export const getSortedPosts = (locale = 'ja') => {
  const postDirectory = path.join(process.cwd(), 'public', '/posts/' + locale);
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace('.md', '');
    const fullPath = path.join(postDirectory, filename, 'index.md');
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const frontmatter = {
      ...data,
      date: data.date,
    };
    return {
      slug,
      ...frontmatter,
    };
  });

  return {
    [locale]: allPostsData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    }),
  };
};
