import {ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART} from "../constants";

export const addBookToCart = (book) => ({
    type: ADD_BOOK_TO_CART,
    payload: book
});

export const removeBookFromCart = (id) => ({
    type: REMOVE_BOOK_FROM_CART,
    payload: id
});
