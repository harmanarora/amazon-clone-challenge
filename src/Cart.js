import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let priceTotal =0;
        //loop through all cart items
        //console.log(cartItems);
        cartItems.forEach((item) => {
            //add the price of each item as per quantity of the cart items to total
            priceTotal += (item.product.quantity * item.product.price);
        })
        return priceTotal;
    }

    const getQuantityCount = () => {
        let quantityCount =0;
        //loop through all cart items
        //console.log(cartItems);
        cartItems.forEach((item) => {
            //add the quantity of the cart items to total
            quantityCount += item.product.quantity;
        });
        return quantityCount;
    };

    return (
        <CartContainer>
            <CartItems cartItems={cartItems} />
            <CartTotal getTotalPrice={getTotalPrice} getQuantityCount={getQuantityCount} />
        </CartContainer>
    )
}

export default Cart

const CartContainer = styled.div`
    display: flex;

    //TRouBLe or clockwise T-R-B-L
    padding: 14px 18px 12px 18px;

    //align at top of the page - dynamic height
    align-items: flex-start;
`