import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {setBooks} from "actions/books";
import {setFilter} from "actions/filter";
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
        const {books, isReady, setFilter, filterBy} = this.props;
        return <Container>
            <Menu/>
            <Filter setFilter={setFilter} filterBy={filterBy}/>
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

const sortBy = (books, filterBy) => {
    return orderBy(books, filterBy, "DESC");
};

const mapStateToProps = ({books}) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady,
    filterBy: books.filterBy
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books)),
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
