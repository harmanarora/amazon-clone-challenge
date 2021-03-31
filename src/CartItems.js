import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.js'

function CartItems() {
    return (
        <CartItemsContainer>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>
                <CartItem />
            </ItemsContainer>
        </CartItemsContainer>
    )
}

export default CartItems

const CartItemsContainer = styled.div`
    height: 300px;
    background-color: white;
    
    //margin-outside & padding-inside
    margin-right: 18px;
    padding: 20px;

    //take up 80% of space
    flex: 0.8;
`

const Title = styled.div``

const ItemsContainer = styled.div``