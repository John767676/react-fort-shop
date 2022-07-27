import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        addCount = Function.prototype,
        decreaseCount = Function.prototype
    } = props

    return (
        <li className="collection-item" id={id}>
            {name}
            <i
                style={{cursor: "pointer", verticalAlign: "middle", color: 'red'}}
                onClick={() => decreaseCount(id)}
                className='material-icons'>
                remove
            </i>
            X {quantity}
            <i
                style={{cursor: "pointer", verticalAlign: "middle", color: 'green'}}
                onClick={() => addCount(id)}
                className='material-icons'>
                add
            </i>
            = {price * quantity}
            <span onClick={() => removeFromBasket(id)} className="secondary-content">
                <i style={{cursor: "pointer"}} className="material-icons">clear</i>
            </span>
        </li>
    );
};

export default BasketItem;