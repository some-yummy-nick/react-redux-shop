import {ADD_BOOK} from "../constants";

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});
