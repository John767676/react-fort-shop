import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        addCount = Function.prototype,
        decreaseCount = Function.prototype,
        clearBasket = Function.prototype
    } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list preventScrolling">
            <li className="collection-item active">Корзина
                <span className="secondary-content">
                    <i style={{cursor: "pointer"}} className="material-icons red" onClick={handleBasketShow}>clear</i>
                </span>
                <span className="secondary-content">
                    <i style={{cursor: "pointer", marginRight: 7, color: "black"}}
                       className="material-icons  grey lighten-3"
                       onClick={clearBasket}>clear_all</i>
                </span>
            </li>
            {
                order.length ? (order.map(item => (
                    <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} addCount={addCount}
                                decreaseCount={decreaseCount}/>
                ))) : (<p style={{textAlign: 'center'}}>Корзина пуста</p>)
            }
            <li className="collection-item active">Сумма: {totalPrice}
                <button className='secondary-content confirm-button' style={{margin: 1}}>Оформить</button>
            </li>
        </ul>
    );
};

export default BasketList;