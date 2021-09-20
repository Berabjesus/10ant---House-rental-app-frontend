import { VIEW_SUCCESS } from '../types';

const initialState = {
  created: false,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_SUCCESS:
      return {
        content: action.payload,
      };
    default: return state;
  }
};

export default viewReducer;