import { STATUS_LOADING, STATUS_ERRORS, STATUS_SUCCESS } from '../types';

export const setStatusToLoading = () => ({
  type: STATUS_LOADING,
});

export const setStatusToSuccess = () => ({
  type: STATUS_SUCCESS,
});

export const setStatusToError = (payload) => ({
  type: STATUS_ERRORS,
  payload,
});
