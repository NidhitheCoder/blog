import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];

    case "edit_blogPost":
      return state.map(blogPost =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );

    case "delete_blogPost":
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    try {
      dispatch({ type: "add_blogPost", payload: { title, content } });
      callback && callback();
    } catch (e) {}
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content,callback) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
