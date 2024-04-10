import React from 'react';
import styled from "styled-components";
import loginIllustration from '../../assets/logins/login-illustration.png';
import logo from '../../assets/icons/under25-logo.png';
import microsoft from '../../assets/icons/microsoft.png';

const Wrapper = styled.div`
  display: flex;
  background: #fff;
  padding: 0px 20px;
  position: absolute;
  z-index: 10;

  width: 849px;
  height: 494px;
  border-radius: 24px;
`;

const IllustrationContainer = styled.div`
  img {
    width: 409px;
    height: 100%;
    object-fit: contain;
    border-radius: 16px 0 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 33px;

  .btn-image {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  .logo {
    height: 56px;
    width: 56px;
  }

  .text-primary {
    font-size: 32px;
    line-height: 44px;
    font-weight: 500;
  }

  .text-secondary {
    font-size: 20px;
    color: #666666;
  }

  div {
    margin: 30px 0;
    
    p:last-child {
      margin-top: 10px;
    }
  }
  button {
    background: #F8F8F8;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #E2E2E2;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


const Login = () => {

    const loginHandler = () => {
        window.location.href = '/dashboard';
    }

    return (
        <Wrapper>
            <IllustrationContainer>
                <img src={ loginIllustration } alt='login'/>
            </IllustrationContainer>

            <Container>
                <img className='logo' src={ logo } alt='logo'/>

                <div>
                    <p className='text-primary'> Login with <br/> Microsoft </p>
                    <p className='text-secondary'> Click on Sign in with microsoft access the mission dashboard </p>
                </div>

                <button onClick={ loginHandler }> <img src={microsoft} className='btn-image'/> Sign in with Microsoft</button>
            </Container>

        </Wrapper>
    )
}

export default Login;