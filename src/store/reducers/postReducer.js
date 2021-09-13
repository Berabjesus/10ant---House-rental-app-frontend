import { POST_SUCCESS } from '../types';

const initialState = {
  created: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return {
        uploaded: true,
      };
    default: return state;
  }
};

export default postReducer;
