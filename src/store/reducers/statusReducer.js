import { STATUS_LOADING, STATUS_SUCCESS, STATUS_ERRORS } from '../types';

const initialState = {
  loading: false,
  error: null,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STATUS_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case STATUS_ERRORS:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
