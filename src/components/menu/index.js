import React from "react";
import {Menu, Popup, List, Button, Image} from "semantic-ui-react";
import {connect} from "react-redux";
import uniqBy from "lodash/uniqBy";
import {removeBookFromCart} from "../../actions/cart";

const style = {
    maxWidth: "initial"
};

const CartComponent = ({book, removeBookFromCart}) => {
    const {title, id, image} = book;
    return <List.Item>
        <List.Content floated='right'>
            <Button onClick={() => removeBookFromCart(id)} color="red">Удалить</Button>
        </List.Content>
        <Image avatar src={image}/>
        <List.Content>{title}</List.Content>
    </List.Item>
};

const MainMenu = ({length, sum, items, removeBookFromCart}) =>
    <Menu>
        <Menu.Item name='store'>
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='sum'>
                Итого&nbsp;<b>{sum}</b>&nbsp;руб.
            </Menu.Item>
            <Popup
                style={style}
                trigger={
                    <Menu.Item name='cart'>
                        Корзина&nbsp;<b>({length})</b>
                    </Menu.Item>
                }
                content={<List selection divided verticalAlign='middle'>
                    {items.map(item =>
                        <CartComponent book={item} key={`cart-${item.id}`} removeBookFromCart={removeBookFromCart}/>)}
                </List>}
                on='click'
                hideOnScroll
            />

        </Menu.Menu>
    </Menu>;

export {MainMenu};

const mapStateToProps = ({cart}) => ({
    items: uniqBy(cart.items, o => o.id),
    length: cart.items.length,
    sum: cart.items.reduce((a, o) => a + o.price, 0)
});

const mapDispatchToProps = dispatch => ({
    removeBookFromCart: id => dispatch(removeBookFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
