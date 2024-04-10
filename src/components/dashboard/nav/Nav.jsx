import React, { useState } from 'react';
import styled from "styled-components";
import logo from '../../../assets/icons/under25-logo.png';
import logoutIcon from '../../../assets/icons/logout-icon.png'
import hamburger from '../../../assets/icons/hamburger.png';
import ModalComponent from "../../modal/Modal";

const Wrapper = styled.div`
  min-width: 280px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid #F2F2F2;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 8px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    height: fit-content;

    img {
      height: 15px;
      width: 15px;
    }
  }

  img {
    height: 56px;
    width: 56px;

  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #F2F2F2;

    .icon {
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }

    &:hover {
      background: #F2F2F2;
    }
  }
`;

const Footer = styled.div`
  padding: 16px;
  display: flex;

  .icon {
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }

  button {
    font-size: 18px;
  }

`;

const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    flex-grow: 1;
  }

  .modal-header {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
    justify-content: space-between;

    p {
      font-size: 22px;
    }

    border-bottom: 1px solid #F2F2F2;
  }

  .red-btn {
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    background: #FF5050;
    width: 100%;
    box-shadow: 0px 2px 0px 0px #892323;
  }
`;


const Nav = ({ navOptions, selectHandler }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(true)
    }

    const onLogoutHandler = () => {
        window.location.href = '/login';
        setIsOpen(false)
    }

    return (
        <Wrapper>
            <Header>
                <img src={ logo } alt='logo'/>

                <button><img src={ hamburger }/></button>
            </Header>

            <Container>
                {
                    navOptions.map((item, index) => (
                        <button key={ index } onClick={ () => selectHandler(index) }>
                            <img src={ item.icon } alt='icon' className='icon'/>
                            { item.label }
                        </button>
                    ))
                }
            </Container>

            <Footer>
                <img src={ logoutIcon } alt='icon' className='icon'/>
                <button onClick={ openModalHandler }>Logout</button>
            </Footer>

            <ModalComponent modalIsOpen={ modalIsOpen } setIsOpen={ setIsOpen }>
                <ModalWrapper>
                    <div className='modal-header'>
                        <p>Logout</p>
                        <button onClick={ () => setIsOpen(false) }> X</button>
                    </div>

                    <p>Are you sure you want to logout, you will have to sign in with microsoft to log in again.</p>
                    <button className='red-btn' onClick={ onLogoutHandler }> Logout</button>
                </ModalWrapper>
            </ModalComponent>
        </Wrapper>
    )
}

export default Nav;