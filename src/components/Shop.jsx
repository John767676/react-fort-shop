import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setIsOpen(!isOpen)
    }

    const clearBasket = (id) => {
        setOrder([])
    }

    const addCount = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decreaseCount = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 1 ? newQuantity : 1
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('')
    }
    //get goods
    useEffect(() => {
        fetch(API_URL, {
            headers: {'Authorization': API_KEY}
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
            {
                isOpen &&
                <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}
                            addCount={addCount} decreaseCount={decreaseCount} clearBasket={clearBasket}/>
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
};

export default Shop;