import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem.js'

function CartItems({ cartItems }) {
    return (
        <CartItemsContainer>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem 
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </CartItemsContainer>
    )
}

export default CartItems

const CartItemsContainer = styled.div`
    background-color: white;
    
    //margin-outside & padding-inside
    margin-right: 18px;
    padding: 20px;

    //take up 80% of space
    flex: 0.8;
`

const Title = styled.h1`
    margin-bottom: 8px;
`

const ItemsContainer = styled.div``