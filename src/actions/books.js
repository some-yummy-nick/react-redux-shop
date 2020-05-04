import {SET_BOOKS} from "../constants";

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books
});
