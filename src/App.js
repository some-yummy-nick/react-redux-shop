import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {setBooks} from "actions/books";
import {setFilter, setQuery} from "actions/filter";
import axios from 'axios';
import orderBy from "lodash/orderBy";
import {Container, Card} from "semantic-ui-react";
import "./app.scss";
import Menu from "components/menu";
import {Book} from "components/book";
import {Filter} from "components/filter";

class App extends PureComponent {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get("/mocks/books.json").then(({data}) => setBooks(data))
    }

    render() {
        const {books, isReady, setFilter, filterBy, query, setQuery} = this.props;
        return <Container>
            <Menu/>
            <Filter setFilter={setFilter} filterBy={filterBy} setQuery={setQuery} query={query}/>
            <Card.Group itemsPerRow={4}>
                {!isReady
                    ?
                    "Загрузка"
                    :
                    books.map(book => <Book key={`book-${book.id}`} {...book}/>)}
            </Card.Group>
        </Container>;
    }
}

export {App};

const filterBooks = (books, query) =>
    books.filter(o => o.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || o.author.toLowerCase().indexOf(query.toLowerCase()) >= 0);

const sortBy = (books, filterBy) => orderBy(books, filterBy, "DESC");

const searchBooks = (books, filterBy, query) => sortBy(filterBooks(books, query), filterBy);

const mapStateToProps = ({books, filter}) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.query),
    isReady: books.isReady,
    filterBy: books.filterBy,
    query: filter.query
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    setFilter: filter => dispatch(setFilter(filter)),
    setQuery: query => dispatch(setQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
