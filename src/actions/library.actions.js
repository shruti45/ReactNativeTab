import { SUCCESS } from "../utils/constants";
export const GET_BOOK_LIST_SUCCESS = "GET_BOOK_LIST_SUCCESS";
import { BookListJson } from "../utils/BookListJson";

export function getBooksList() {
  return {
    type: GET_BOOK_LIST_SUCCESS,
    status: SUCCESS,
    BookListJson
  };
}
