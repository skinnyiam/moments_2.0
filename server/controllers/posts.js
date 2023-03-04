import mongoose from "mongoose";
import PostDetail from "../models/postMoments.js";
//to get post from the database
export const getPost = async (req, res) => {
  try {
    const postDetails = await PostDetail.find();
    res.status(200).json(postDetails);
  } catch (error) {
    res.status(404).json(error);
  }
};
//to create post
export const createPost = async (req, res) => {
  //this value recieving from the frontend
  const post = req.body;
  //passing the value in database
  const newPost = new PostDetail(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error);
  }
};
//to update post
export const updatePost = async (req, res) => {
  //taking id value
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  const updatedPost = await PostDetail.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  console.log(updatePost);
  res.json(updatedPost);
};
//to delete a post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }
  await PostDetail.findByIdAndDelete(_id);
  res.json("post deleted succesfully");
};
//to like a post
export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }
  const post = await PostDetail.findById(_id);
  const updatedPost = await PostDetail.findByIdAndUpdate(
    _id,
    { like: post.like + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
