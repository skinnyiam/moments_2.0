import * as api from "../api/index";

//action creators are functions that return an action
//since we have dealing with async logic we will add async and
//thunk will return an function or we can say dispatch an action according
// to logic

export const getPost = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    const response = await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
