import React from 'react'
import styled from 'styled-components'

function CartTotal() {
    return (
        <CartTotalContainer>
            Cart Total
        </CartTotalContainer>
    )
}

export default CartTotal

const CartTotalContainer = styled.div`
    height: 200px;
    background-color: white;
    padding: 20px;

    //take up 20% of space
    flex: 0.2;
`