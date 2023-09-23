import { actionTypes } from "./actions";

const getInitialState = () => [];

export default (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POSTS:
      return payload;
    case actionTypes.ADD_POST:
      return [payload, ...state];
    case actionTypes.DELETE_POST:
      return [...state.filter((post) => post.id !== payload)];
    default:
      return state;
  }
};
