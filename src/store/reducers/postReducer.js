import { FETCH_POSTS, ADD_POST, DELETE_POST } from "../actions";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    case ADD_POST:
      return [payload, ...state];
    case DELETE_POST:
      return [...state.filter((_, index) => index !== payload)];
    default:
      return state;
  }
};
