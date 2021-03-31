import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product.js'
import { db } from './firebase.js'

function Home() {

    //set products using State
    const [products, setProducts] = useState([]);

    //set products from db
    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = [];

            //console.log(snapshot);
            //tempProducts = snapshot.docs.map((doc) =>doc.data());
            //console.log(tempProducts);
            
            tempProducts= snapshot.docs.map((doc)=> (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }
    
    //keeps rendering it
    //getProducts();

    //react hook - makes sure to call this function once when home page is rendered 1st time (page mount)
    useEffect(() => {
        console.log("call products");
        getProducts()
    }, [])
    
    console.log(products);


    return (
        <HomeContainer>
            <Banner>
                
            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                        />
                    ))
                }
            </Content>
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    max-width: 1400px;

    //fully centered div
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    
    //centrally positioned
    background-position: center;

    //covers to adapt to size of window
    background-size: cover;

    //fading towards bottom
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`

const Content = styled.div`
    padding: 0px 10px 0px 10px;

    //margin moved up into other div, can't use position absolute
    margin-top: -350px;

    //to help pop-up over banner
    display: flex;
`