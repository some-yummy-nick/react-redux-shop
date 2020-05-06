import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {setBooks} from "actions/books";
import axios from 'axios';
import orderBy from "lodash/orderBy";
import {Container, Card} from "semantic-ui-react";
import "./app.scss";
import Menu from "components/menu";
import Book from "components/book";
import Filter from "components/filter";

class App extends PureComponent {
    componentDidMount() {
        const {setBooks} = this.props;
        axios.get("/mocks/books.json").then(({data}) => setBooks(data))
    }

    render() {
        const {books, isReady} = this.props;
        return <Container>
            <Menu/>
            <Filter/>
            <Card.Group itemsPerRow={4}>
                {!isReady
                    ?
                    "Загрузка"
                    :
                    books.map(book => <Book key={`book-${book.id}`} book={book}/>)}
            </Card.Group>
        </Container>;
    }
}

export {App};

const filterBooks = (books, query) =>
    books.filter(o => o.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || o.author.toLowerCase().indexOf(query.toLowerCase()) >= 0);

const sortBy = (books, filterBy) => orderBy(books, filterBy.name, filterBy.isReversed ? "asc" : "desc");

const searchBooks = (books, filterBy, query) => sortBy(filterBooks(books, query), filterBy);

const mapStateToProps = ({books, filter}) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.query),
    isReady: books.isReady,
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
