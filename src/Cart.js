import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function Cart() {
    return (
        <CartContainer>
            <CartItems />
            <CartTotal />
        </CartContainer>
    )
}

export default Cart

const CartContainer = styled.div`
    display: flex;
    //TRouBLe or clockwise T-R-B-L
    padding: 14px 18px 12px 18px;
`