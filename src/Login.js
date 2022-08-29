import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase.js'

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            // console.log(user);

            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            //using browser cache
            localStorage.setItem('user',JSON.stringify(newUser));
            setUser(newUser);

        }).catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <LoginContainer>
            <Content>
                <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'/>
                <h1>Login to your Amazon-clone account</h1>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    width: 100%;

    //full height of webpage
    height: 100vh;

    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`

const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`

const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`

/*
OR
const AmazonLogo = styled.div`
    background-image: url('https://m.media-amazon.com/images/S/sash/mPGmT0r6IeTyIee.png');
    height: 31px;
    width: 103px;
    background-position: -5px -130px;
    background-size: 400px 750px;
    display: inline-block;
    vertical-align: top;
`
*/

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    padding: 4px 8px;
    cursor: pointer;

    background-color: #febd69;
    font-weight: bold;
    color : black;

    //width, style, color & cornering
    border: 1px solid #a88734;
    border-radius: 8px;

    text-align: center;
    box-shadow: 0 4px #999;

    :active {
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        background-color: #f0c14b;
    }

`