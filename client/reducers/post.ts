interface Post {
  _id: string;
  // other properties of a Post object
}

export default (posts: Post[] = [], action: any) => {
  switch (action.type) {
    //to delete a post
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    //on creating the post we will send the data to backend
    case "CREATE":
      return [...posts, action.payload];

    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        //action.payload is newly created memory
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return posts;
  }
};
