export function reducer2(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }
            return {...state, order: newOrder, alertName: payload.name}
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.id !== payload.id)
            }
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                order: []
            }
        case 'ADD_COUNT': {
            const newOrder = state.order.map(el => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                } else {
                    return el
                }
            })
            return {...state, order: newOrder}
        }
        case 'DECREASE_COUNT': {
            const newOrder = state.order.map(el => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity - 1
                    return {
                        ...el,
                        quantity: newQuantity >= 1 ? newQuantity : 1
                    }
                } else {
                    return el
                }
            })
            return {...state, order: newOrder}
        }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'FETCH_DATA_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state
    }
}
