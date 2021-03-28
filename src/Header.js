import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <Link to="/">
                    <HeaderLogoImage src='https://i.imgur.com/7I9Was5.png'/>
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderUserItem>
                    <HeaderOptionLineOne>Hello,</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>Select your address</HeaderOptionLineTwo>
                </HeaderUserItem>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderUserItem>
                    <HeaderOptionLineOne>Hello, Harman!</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>Accounts & Lists</HeaderOptionLineTwo>
                </HeaderUserItem>
                <HeaderUserItem>
                    <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
                </HeaderUserItem>
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon/>
                        <HeaderCartCount>0</HeaderCartCount>
                    </Link>    
                </HeaderOptionCart>
            </HeaderNavItems>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const HeaderLogo = styled.div``

const HeaderLogoImage = styled.img`
    width : 100px;
    margin-left: 11px;
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const HeaderOptionLineOne= styled.div``

const HeaderOptionLineTwo= styled.div`
    //bold
    font-weight: 700;
`

const HeaderSearch = styled.div`
    //align items sideways
    display: flex;

    flex-grow: 1;
    height: 40px;
    
    //smooth corners
    border-radius: 4px;
    overflow: hidden;

    margin-left: 4px;
    background-color: white;

    //box-shadow on focus
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    //grow more than others
    flex-grow: 1;

    //borderless design
    border: 0;

    //remove outline
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;

    //horizontally center
    display: flex;
    justify-content: center;

    //vertically center
    align-items: center;
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderUserItem = styled.div`
    //TRouBLe = Top Right Bottom Left
    padding: 10px 9px 10px 9px;
`

const HeaderOptionCart = styled.div`
    display: flex;

    //adding Link
    a {
        display: flex;
        align-items:center;
        padding-right: 9px;

        //override default color of content
        color: white;

        //remove underline
        text-decoration: none;
    }
`

const HeaderCartCount = styled.div`
    padding-left: 4px; 
`