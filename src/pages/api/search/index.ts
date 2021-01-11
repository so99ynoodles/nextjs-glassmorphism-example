import { getSortedPosts } from '../../../../lib/posts';

export default (req, res) => {
  const locale = req.query.locale || 'ja';
  const posts =
    process.env.NODE_ENV === 'production'
      ? require('../../../cache/data').posts
      : getSortedPosts(locale);

  const results = req.query.keyword
    ? (posts || []).filter((post) =>
        post.title.toLowerCase().includes(req.query.keyword.toLowerCase())
      )
    : [];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
