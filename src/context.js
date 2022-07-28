import {createContext, useReducer} from 'react'
import {reducer2} from "./reducer";

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isOpen: false,
    alertName: ''
}

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer2, initialState)

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.removeFromBasket = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: id}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }

    value.clearBasket = (id) => {
        dispatch({type: 'CLEAR_BASKET', payload: {id: id}})
    }

    value.addCount = (id) => {
        dispatch({type: 'ADD_COUNT', payload: {id: id}})
    }

    value.decreaseCount = (id) => {
        dispatch({type: 'DECREASE_COUNT', payload: {id: id}})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.setGoods = (data) => {
        dispatch({type: 'FETCH_DATA_GOODS', payload: data})
    }


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}