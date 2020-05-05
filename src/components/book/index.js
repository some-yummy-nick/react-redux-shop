import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import {addBookToCart} from "../../actions/cart";
import {connect} from "react-redux";

const Book = ({book, count, addBookToCart}) => {
    const {image, title, author, price} = book;
    return <Card>
        <Image src={image} wrapped/>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Icon name='rub'/>
            <b>{price}</b>
        </Card.Content>
        <Button onClick={() => addBookToCart(book)}>Добавить в корзину {count > 0 && `(${count})`}</Button>
    </Card>
};

export {Book};

const mapStateToProps = ({cart}, {book}) => ({
    count: cart.items.reduce((a, item) => a + (item.id === book.id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
    addBookToCart: book => dispatch(addBookToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
