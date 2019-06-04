import { connect } from "react-redux";
import Repositories from "../components/Repositories";
import { getRepositories } from "../actions/repositories.actions";

const mapStateToProps = state => {
  return {
    loading: state.repos.loading,
    error: state.repos.error,
    status: state.repos.status,
    repositories: state.repos.repositories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepositories: () => {
      dispatch(getRepositories());
    }
  };
};
const RepositoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
export default RepositoriesContainer;
