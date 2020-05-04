import React from 'react';
import {connect} from "react-redux";
import {addBook} from "actions/books";

function App({books, addBook}) {
    const newBook = {id: 1, title: "Новая"};
    return (
        <>
            <ul>
                {books.map(book => <li key={`book-${book.id}`}>{book.title}</li>)}
            </ul>
            <button onClick={() => addBook(newBook)}>Новая</button>
        </>
    );
}

export {App};

const mapStateToProps = (state) => ({...state});

const mapDispatchToProps = dispatch => ({
    addBook: books => dispatch(addBook(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
