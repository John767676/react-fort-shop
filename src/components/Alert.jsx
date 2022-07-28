import React, {useContext, useEffect} from 'react';
import {ShopContext} from "../context";

const Alert = (props) => {
    const {alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
};

export default Alert;