import React from "react";
import {Menu} from "semantic-ui-react";
import {connect} from "react-redux";

const MainMenu = ({length}) =>
    <Menu>
        <Menu.Item name='store'>
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='sum'>
                Итого&nbsp;<b>0</b>&nbsp;руб.
            </Menu.Item>

            <Menu.Item name='cart'>
                Корзина&nbsp;<b>({length})</b>
            </Menu.Item>
        </Menu.Menu>
    </Menu>;

export {MainMenu};

const mapStateToProps = ({cart}) => ({length: cart.items.length,});

export default connect(mapStateToProps)(MainMenu);
