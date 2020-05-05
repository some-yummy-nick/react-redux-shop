import {ADD_BOOK_TO_CART} from "../constants";

export const addBookToCart = (book) => ({
    type: ADD_BOOK_TO_CART,
    payload: book
});
