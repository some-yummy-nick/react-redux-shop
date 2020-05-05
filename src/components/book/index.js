import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react';
import {addBookToCart} from "../../actions/cart";
import {connect} from "react-redux";

const Book = ({image, title, author, price}) => {
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
    </Card>
};

export {Book};

const mapStateToProps = () => {
};

const mapDispatchToProps = dispatch => ({
    addBook: book => dispatch(addBookToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
