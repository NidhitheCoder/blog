import React, { useReducer } from "react";

export default (reducer, actions, inititalState) => {
  const Context = React.createContext();
  const provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inititalState);
    // actions === {addBlogPost:(dispatch) => {return () =>{}}}

    const boundActions = {};
    for(let key in actions) {
        // key == 'addBlogPost'
        boundActions[key] = actions[key](dispatch);
    }

    return <Context.provider value={{ state,...boundActions}}>{children}</Context.provider>;
  };

  return { Context, provider };
};
