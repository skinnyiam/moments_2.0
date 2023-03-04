import axios from "axios";

//this url pointing to backend
//it returns all the post in the database
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost: any) => axios.post(url, newPost);

export const updatePost = (id: any, updatedPost: any) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id: any) => axios.delete(`${url}/${id}`);

export const likePost = (id: any) => axios.patch(`${url}/${id}/likePost`);
