import React from 'react'
import styled from 'styled-components'
import Product from './Product.js'

function Home() {
    return (
        <HomeContainer>
            <Banner>
                
            </Banner>
            <Content>
                <Product/>
                <Product/>
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