import React from 'react';
import {Input, Menu} from 'semantic-ui-react';

export const Filter = ({setFilter, filterBy}) =>
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
                <Input icon='search' placeholder='Search...'/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>;

