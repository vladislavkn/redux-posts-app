import { FETCH_POSTS, ADD_POST, DELETE_POST } from "../types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    case ADD_POST:
      return [...state, payload];
    case DELETE_POST:
      return [...state.filter((_, index) => index !== payload)];
    default:
      return state;
  }
};
