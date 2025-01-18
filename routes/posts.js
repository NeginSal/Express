import { Router } from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';

const router = Router();

// GET ALL POSTS
router.get('/', getPosts);

// GET a single post
router.get('/:id', getPost);

// create new post
router.post('/', createPost);

//update a post 
router.put('/:id', updatePost);

// Delete a post 
router.delete('/:id', deletePost);

export default router;