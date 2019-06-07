import * as libraryActions from "../actions/library.actions";
const libary = (
  state = {
    booksList: null,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case libraryActions.GET_BOOK_LIST_SUCCESS: {
      return Object.assign({}, state, {
        status: action.status,
        booksList: action.BookListJson
      });
    }
    default:
      return state;
  }
};
export default libary;
