import React from 'react'
import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star';

function Product({title,price,rating,image,id}) {

    //object
    //console.log(props);

    //unpacked props above

    return (
        <ProductContainer>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
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

const Rating = styled.div`
    display: flex;
`

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