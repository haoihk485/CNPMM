import express from 'express'

import { signupUser, loginUser } from '../controllers/userController.js'
import upload from '../middlewares/upload.js'
import { getAllPosts, createPost, getPost, updatePost, deletePost, createPostNoImage, updatePostNoImage } from '../controllers/postController.js'
import { authenticateToken } from '../controllers/jwtController.js'
import { addComment, getAllComment } from '../controllers/commentController.js'


const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/post/create', authenticateToken, upload.single("file"), createPost)
router.post('/post/createNoImage', authenticateToken, createPostNoImage)
router.get('/posts', authenticateToken, getAllPosts)
router.get('/post/:id', authenticateToken, getPost)
router.put('/post/update', authenticateToken, upload.single("file"), updatePost)
router.put('/post/updateNoImage', authenticateToken, updatePostNoImage)
router.delete('/post/delete', authenticateToken, deletePost)
router.post('/comment/create', authenticateToken, addComment)
router.get('/comments/:id', authenticateToken, getAllComment)


export default router