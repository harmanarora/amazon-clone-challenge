import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom";

function Header({ user, cartItems , signOut, handleSearch }) {

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
                <HeaderSearchInput type='text' onKeyUp={handleSearch}/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderUserItem>
                    <HeaderOptionLineOne>Hello, {user.name}</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>Accounts & Lists</HeaderOptionLineTwo>
                </HeaderUserItem>
                <HeaderUserItem onClick={signOut}>
                    <HeaderLogoutButton>Logout</HeaderLogoutButton>
                </HeaderUserItem>
                <HeaderUserItem>
                    <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
                </HeaderUserItem>
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon/>
                        <HeaderCartCount>{getQuantityCount()}</HeaderCartCount>
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
    align-items : center;
    padding: 0px 10px 0px 0px;
`

const HeaderLogoutButton= styled.div`
    width: 65px;
    height: 25px;
    background-color: #febd69;
    font-weight: bold;
    color : black;

    //width, style, color & cornering
    border: 1px solid #a88734;
    border-radius: 8px;

    cursor: pointer;
    text-align: center;
    box-shadow: 0 4px #999;

    :hover {
        background-color: yellow
    }
    :active {
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        background-color: #f0c14b;
    }
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

const HeaderUserItem = styled.div`
    //TRouBLe = Top Right Bottom Left
    padding: 0px 9px 0px 9px;

    cursor: pointer;
`

const HeaderOptionCart = styled.div`


    display: flex;
    align-items:center;
    padding-left: 2px;

    width: 60px;

    height: 30px;

    background-color: #febd69;
    font-weight: bold;
    color : black;

    //width, style, color & cornering
    border: 1px solid #a88734;
    border-radius: 8px;

    cursor: pointer;
    text-align: center;
    box-shadow: 0 4px #999;

    :active {
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        background-color: #f0c14b;
    }

    //adding Link
    a {
        display: flex;
        align-items:center;

        //override default color of content
        color: black;

        //remove underline
        text-decoration: none;
    }
`

const HeaderCartCount = styled.div`
    padding-left: 6px;
    font-weight: 700;
    color: #f08804
`