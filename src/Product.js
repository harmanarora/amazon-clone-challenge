import React from 'react'
import styled from 'styled-components'
import { db } from './firebase.js';

function Product({title,price,rating,image,id}) {

    //object
    //console.log(props);

    //unpacked props above


    const addToCart = () => {
        //dupes in Cart due to undefined, debugged
        // console.log(id);
        //creates from product
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        //update quantity if already present
        .then((doc)=>{
            // console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else{
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <ProductContainer>
            <Title>
                {title}
            </Title>
            <Price>
                <p>${price}</p>
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <p>⭐</p>)
                }
            </Rating>
            <Image src={image}/>
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </ProductContainer>
    )
}

export default Product

const ProductContainer = styled.div`
    background-color: white;

    //pop-up over banner
    z-index: 1;

    //fixed horizontally
    flex: 1;
    
    max-height: 500px;
    
    //spacing within
    padding: 20px;

    //spacing
    margin: 10px;

    display: flex;
    flex-direction: column;
`
const Title = styled.span``

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
    display: flex;
`

const Rating = styled.div`
    display: flex;
`

const Image = styled.img`
    max-height: 300px;

    //shrink as per size of window
    //flex-shrink: 1;
    //flex-grow: 0;

    //fit the image size appropriately
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 10px;

    //for center alignment
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 120px;
    height: 30px;
    background-color: #FCD200;

    // //width, style, color & cornering
    border: 2px solid #a88734;
    border-radius: 8px;

    cursor: pointer;
    text-align: center;
    box-shadow: 0 4px #999;

    :hover {
        background-color: #f0c14b
    }
    :active {
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        background-color: #f0c14b;
    }
`