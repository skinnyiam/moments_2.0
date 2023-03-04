import express from "express";
const router = express.Router();
import { getPost, createPost,updatePost,deletePost,likePost} from "../controllers/posts.js";

//localhost:5000/ but when is exported in index we add prifx there /posts so this works on
//localhost:5000/posts/
router.get('/', getPost)
router.post('/', createPost)
//patch is used to update existing document
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)


export default router