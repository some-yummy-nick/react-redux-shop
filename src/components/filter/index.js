import React from 'react';
import {Input, Menu} from 'semantic-ui-react';
import {setFilter, setQuery} from "../../actions/filter";
import {connect} from "react-redux";

const Filter = ({setFilter, filterBy, query, setQuery}) =>
    <Menu pointing>
        <Menu.Item header>Фильтр:</Menu.Item>
        <Menu.Item
            name='price'
            active={filterBy === "price"}
            onClick={() => setFilter("price")}
        >Цена</Menu.Item>
        <Menu.Item
            name='title'
            active={filterBy === 'title'}
            onClick={() => setFilter("title")}
        >Название</Menu.Item>
        <Menu.Item
            name='author'
            active={filterBy === 'author'}
            onClick={() => setFilter("author")}
        >Автор</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' value={query} onChange={e => setQuery(e.target.value)}
                       placeholder='Поиск...'/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>;

export {Filter};

const mapStateToProps = ({books, filter}) => ({
    filterBy: books.filterBy,
    query: filter.query
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setQuery: query => dispatch(setQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
