import { getSortedPosts } from '../../../../lib/posts';

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../../../cache/data').posts
    : getSortedPosts();

export default (req, res) => {
  const results = req.query.keyword
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(req.query.keyword)
      )
    : [];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
