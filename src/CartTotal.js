import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({ getTotalPrice, getQuantityCount}) {

    return (
        <CartTotalContainer>
            <Subtotal>Subtotal ({getQuantityCount()} items):
                <NumberFormat value={ getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={' $'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </CartTotalContainer>
    )
}

export default CartTotal

const CartTotalContainer = styled.div`
    //height: 200px; (removed static height and used dynamic height)
    background-color: white;
    padding: 20px;

    //take up 30% of space
    flex: 0.3;
`

const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    
    //veritcal horizontal
    padding: 4px 8px;

    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    :hover {
        background: #ddb347;
    }
`