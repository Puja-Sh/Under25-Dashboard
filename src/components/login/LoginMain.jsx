import React from 'react';
import styled from "styled-components";
import backgroundImage from '../../assets/backgrounds/login-background-v1.png';
import Login from "./Login";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.img`
  height: 100vh;
  //object-fit: cover;
  width: 100%;
  //position: absolute;
  z-index: 9;
`;


const LoginMain = () => {
    return (
        <Wrapper>
            <Background src={backgroundImage} alt='background-image'/>
            <Login/>
        </Wrapper>
    )
}

export default LoginMain;