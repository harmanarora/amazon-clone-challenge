import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product.js'
import { db } from './firebase.js'
import { Button } from '@material-ui/core';
import NewProducts from './NewProducts.js';

function Home({searchKey}) {

    //set products using State
    const [products, setProducts] = useState([]);
    //added to load new products - 2022-07-30
    const [newProducts, setNewProducts] = useState([]);

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
        //added to load new products - 2022-07-30
        setNewProducts(NewProducts);
        //console.log("call products");
        getProducts();
    }, [])

    console.log(searchKey);

    // if(searchKey){
    //     let tempProducts = products.filter((doc) => {
    //         return doc.product.name.toLowerCase().includes(searchKey.toLowerCase());
    //     })
    //     console.log(tempProducts);
    //     setProducts(tempProducts);
    // }

    
    //console.log(products);

    //added to load new products - 2022-07-30
    const loadNewProducts = () => {
        console.log("load new products..");
        // console.log(newProducts);

        newProducts.forEach((data)=>{
            // console.log(data);
            const res = db.collection('products').doc().set(data);
            res.then((res)=>{
                console.log(res);
            }).catch( (err)=>{
                console.log('error', err);
            })
        });
    }


    return (
        <>
        <Button disabled onClick={loadNewProducts}>Load Fresh Products</Button>
        <HomeContainer>
            <Banner/>
            <Content>
                {!searchKey ?(
                    products.map((data) =>{
                        return (
                            <>
                                <Product
                                key={data.id}
                                title={data.product.name}
                                price={data.product.price}
                                rating={data.product.rating}
                                image={data.product.image}
                                id={data.id}
                                />
                            </>
                        );
                    })
                ):(
                    products.filter((data) => {
                        return data.product.name.toLowerCase().includes(searchKey.toLowerCase());
                    }).map((data) => {
                        return (
                            <>
                                <Product
                                key={data.id}
                                title={data.product.name}
                                price={data.product.price}
                                rating={data.product.rating}
                                image={data.product.image}
                                id={data.id}
                                />
                            </>
                        );
                    })
                )}
            </Content>
        </HomeContainer>
        </>
    )
}

export default Home;

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

    //to help pop-up over banner - how ?
    display: flex;

    //evenly wrap of products
    flex-wrap: wrap;
    justify-content: space-evenly;
`