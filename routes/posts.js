import { Router } from 'express';
const router = Router();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

// GET ALL POSTS
router.get('/', (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// GET a single post
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
});

// create new post
router.post('/', (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };
  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

//update a post 
router.put('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

// Delete a post 
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = posts.find((post) => post.id === id);
  if (index === -1) {
    // res.status(404).json({ msg: `A post with id of ${id} was not found` });
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    posts.splice(index, 1); // Remove the post from the array
    res.status(200).json(posts);
  }
})

export default router;