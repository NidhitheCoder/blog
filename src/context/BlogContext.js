import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `Blogpost #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () =>{
  dispatch({ type: "add_blogPost" });
  };
};

export const { context, provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
