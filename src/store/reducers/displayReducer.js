import { DISPLAY_SUCCESS } from '../types';

const initialState = {
  created: false,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_SUCCESS:
      return {
        content: action.payload,
      };
    default: return state;
  }
};

export default displayReducer;