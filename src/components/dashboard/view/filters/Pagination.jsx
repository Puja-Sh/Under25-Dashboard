import React, { useState } from 'react';
import styled from "styled-components";
import arrow from '../../../../assets/icons/arrow-line-left.png'

const Wrapper = styled.div`
  display: flex;
  button {
    padding: 8px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    margin: 5px;
    cursor: pointer;
    outline: none;
    height: 32px;
    width: 32px;
    
    &:hover{
      background: #F2F2F2;
    }
    
    img {
      width: 16px;
      height: 16px;
      
      &.right {
        transform: rotate(180deg);
      }
    }
  }
`;

const Pagination = () => {
    const pages = Array.from({ length: 18 }, (_, index) => index + 1);


    return (
        <Wrapper>
            <button> <img src={arrow}/> </button>
            <div>
                {
                    pages.slice(0, 3).map((item) => (
                        <button>  {item} </button>
                    ))
                }
                <button> - </button>
                {
                    pages.slice(17, 18).map((item) => (
                        <button>  {item} </button>
                    ))
                }
            </div>

            <button> <img src={arrow} className='right'/> </button>

        </Wrapper>
    )
}

export default Pagination;