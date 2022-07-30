import React from 'react'
import styled from 'styled-components'
import { db } from './firebase.js'

function CartItem( {id, item} ) {

    let options = []

    for (let i=1; i<Math.max(item.quantity+1,10); i++){
        options.push(<option value={i}> Qty: {i}</option>);
    }

    const changeQuantity = (event) => {
        // console.log(event);
        // console.log(event.target);

        let newQuantity = event.target.value;
        // console.log(newQuantity);

        //updates quantity in database -  works due to state and firebase
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    const deleteItem = (event) => {
        
        //event.preventDefault()

        //deletes product
        db.collection('cartItems').doc(id).delete();
    }
    
    return (
        <CartItemContainer>
            <ImageContainer>
                <Image src={item.image}/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity>
                        <select 
                            value={item.quantity}
                            onChange={(event)=>changeQuantity(event)}
                        >
                            {options}
                        </select>
                    </CartItemQuantity>
                    <CartItemDelete
                        //onClick={(event)=>deleteItem(event)}
                        //equals
                        onClick={deleteItem}
                    >
                        Remove
                    </CartItemDelete>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                ${item.price}
            </CartItemPrice>
        </CartItemContainer>
    )
}

export default CartItem

const CartItemContainer = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    //line below each cart item
    border-bottom: 1px solid #DDD;
`

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    margin-right: 16px;

    //never shrinks never grows
    flex-shrink: 0;
    flex-grow: 0;

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;

    //fit the image size appropriately
    object-fit: contain;
`

const CartItemInfo = styled.div`
    //to take max space in div (here, horizontally)
    flex-grow: 1;
`

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const CartItemQuantity = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
        
        :focus {
            outline: none;
        }
    }
`

const CartItemDelete = styled.div`
    color: #007185;
    margin-left: 16px;

    //shows as an action, cursor - hand
    cursor: pointer;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`