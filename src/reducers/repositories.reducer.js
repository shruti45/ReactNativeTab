import * as repositoriesAction from "../actions/repositories.actions";

const categories = (
  state = {
    loading: false,
    repositories: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case repositoriesAction.GET_REPOSITORIES_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case repositoriesAction.GET_REPOSITORIES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        repositories: action.repositories
      });
    }
    case repositoriesAction.GET_REPOSITORIES_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    default:
      return state;
  }
};
export default categories;
