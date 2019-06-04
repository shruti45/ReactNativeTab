import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_REPOSITORIES_REQUEST = "GET_REPOSITORIES_REQUEST";
export const GET_REPOSITORIES_SUCCESS = "GET_REPOSITORIES_SUCCESS";
export const GET_REPOSITORIES_FAILURE = "GET_REPOSITORIES_FAILURE";

export function getRepositoriesRequest() {
  return {
    type: GET_REPOSITORIES_REQUEST,
    status: REQUEST
  };
}
export function getRepositoriesSuccess(repositories) {
  return {
    type: GET_REPOSITORIES_SUCCESS,
    status: SUCCESS,
    repositories
  };
}
export function getRepositoriesFailure(error) {
  return {
    type: GET_REPOSITORIES_FAILURE,
    status: ERROR,
    error
  };
}

export function getRepositories(limit = 10) {
  return async (dispatch, getState, api) => {
    dispatch(getRepositoriesRequest());
    try {
      const result = await api.get(`sports/top.json?limit=${limit}`);
      const resultJson = await result.json();
      dispatch(getRepositoriesSuccess(resultJson.data));
    } catch (e) {
      dispatch(getRepositoriesFailure(e.message));
    }
  };
}
