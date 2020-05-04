import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {setBooks} from "actions/books";
import axios from 'axios';

class App extends PureComponent {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get("/mocks/books.json").then(({data}) => setBooks(data))
    }


    render() {
        const {books, isReady} = this.props;
        return <>
            <ul>
                {!isReady
                    ?
                    "Загрузка"
                    :
                    books.map(book => <li key={`book-${book.id}`}><strong>{book.title}</strong> - {book.author}</li>)}
            </ul>
        </>;
    }
}

export {App};

const mapStateToProps = ({books}) => ({books: books.items, isReady: books.isReady});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
