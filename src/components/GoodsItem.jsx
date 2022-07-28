import React, {useEffect, useReducer, useContext} from 'react';
import {ShopContext} from "../context";

const reducer = (state, {type}) => {
    switch (type) {
        case 'handmade':
            return {
                num: "#FFFFFF"
            }
        case 'common':
            return {
                num: "#808080"
            }
        case 'uncommon':
            return {
                num: '#008000'
            }
        case 'rare':
            return {
                num: '#0000FF'
            }
        case 'epic':
            return {
                num: "#8900FF"
            }
        case 'legendary':
            return {
                num: "#FFA500"
            }
        case 'mythic':
            return {
                num: '#FFD700'
            }
        case 'exotic':
            return {
                num: '#ADD8E6'
            }
        case 'transcendent':
            return {
                num: '#ffcccb'
            }
        case 'marvel Series':
            return {
                num: '#8B0000'
            }
        case 'dark Series':
            return {
                num: '#FF00FF'
            }
    }
}

const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        icon,
        image,
        rarity,
    } = props

    const {addToBasket} = useContext(ShopContext)

    const [{num}, dispatch] = useReducer(reducer, {num: '#FFFFFF'})

    useEffect(() => {
        dispatch({type: rarity})
    }, [id])

    return (
        <div className="card">
            <div style={{background: num}} className="card-image">
                <img style={{borderBottom: "1px solid black"}} src={image ? image : icon} alt={name}/>
                <button className="btn-floating halfway-fab waves-effect waves-light red"
                        onClick={() => addToBasket({id, name, price})}>
                    <i className="material-icons">add</i></button>
            </div>
            <div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p style={{fontSize: 18}}>
                        <p className='right'
                           style={{fontSize: 17, marginLeft: 10, fontWeight: 'bold', color: num}}>{price}V</p>
                        {description}</p>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;