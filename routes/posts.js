const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

// GET ALL POSTS
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// GET a single post
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.is);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ msg: `A post with id of ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
});

module.exports = router;