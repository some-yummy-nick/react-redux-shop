import React from 'react';
import {Icon, Input, Menu} from 'semantic-ui-react';
import {setFilter, setQuery} from "../../actions/filter";
import {connect} from "react-redux";
import {Card} from "semantic-ui-react/dist/commonjs/views/Card";

const Item = ({filterBy, setFilter, name, children}) =>
    <Menu.Item
        name={name}
        active={filterBy.name === name}
        onClick={() => setFilter(name)}
    >{children}
        {filterBy.name === name && !filterBy.isReversed &&
        <Icon name='long arrow alternate up'/>
        }
        {filterBy.name !== "" && filterBy.name === name && filterBy.isReversed &&
        <Icon name='long arrow alternate down'/>
        }
    </Menu.Item>;

const filters = [
    {
        title: "price",
        text: "Цена"
    }, {
        title: "title",
        text: "Название"
    }, {
        title: "author",
        text: "Автор"
    },
];

const Filter = ({setFilter, filterBy, query, setQuery}) =>
    <Menu pointing>
        <Menu.Item header>Фильтр:</Menu.Item>
        {
            filters.map((filter, i) =>
                <Item key={`filter-${i}`}
                      filterBy={filterBy}
                      setFilter={setFilter}
                      name={filter.title}>
                    {filter.text}
                </Item>)
        }
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' value={query} onChange={e => setQuery(e.target.value)}
                       placeholder='Поиск...'/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>;

export {Filter};

const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
    query: filter.query
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setQuery: query => dispatch(setQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
