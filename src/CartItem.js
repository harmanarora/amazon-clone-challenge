import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <CartItemContainer>
            <ImageContainer>
                <img src={"https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"}/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>New Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (Latest Model, 8th Generation)</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity>5</CartItemQuantity>
                    <CartItemDelete>Delete</CartItemDelete>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                $1449
            </CartItemPrice>
        </CartItemContainer>
    )
}

export default CartItem

const CartItemContainer = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
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

const CartItemInfo = styled.div``

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
`

const CartItemQuantity = styled.div``

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