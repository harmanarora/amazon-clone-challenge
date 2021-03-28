import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <ProductContainer>
            <Title>Ipad Pro</Title>
            <Price>$1449
            </Price>
            <Rating>
                *****
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SL1500_.jpg'/>
            <ActionSection>
                <AddToCartButton>
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
`

const Rating = styled.div``

const Image = styled.img`
    max-height: 400px;

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
    width: 100px;
    height: 30px;
    background-color: #f0c14b;

    //width, style, color & cornering
    border: 2px solid #a88734;
    border-radius: 2px;
`