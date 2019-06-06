import { connect } from "react-redux";
import Library from "../components/Library";
import { getBooksList } from "../actions/library.actions";

const mapStateToProps = state => {
  return {
    status: state.library.status,
    booksList: state.library.booksList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooksList: () => {
      dispatch(getBooksList());
    }
  };
};
const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
export default LibraryContainer;
