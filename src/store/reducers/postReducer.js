import { FETCH_POSTS, ADD_POST } from "../types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    case ADD_POST:
      return [...state, payload];
    default:
      return state;
  }
};
