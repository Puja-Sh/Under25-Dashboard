import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #E8E8E8;
  padding: 16px;
  flex: 1 0 20%;
  border-radius: 8px;
  
  margin-top: 12px;
  align-items: center;
  
  &:nth-child(4){
    margin-right: 0 !important;
  }
  &:not(:last-child){
    margin-right: 12px;
  }

  .content {
    p:first-child {
      font-size: 24px;
    }

    p:last-child {
      font-size: 16px;
      color: #666666;
    }
  }

  .image-wrapper {
    background: #F2F2F2;
    padding: 8px;
    border-radius: 8px;
    margin-right: 16px;

    img {
      height: 20px;
      width: 20px;
    }
  }
`;

const Cards = ({ cardInformation }) => {
    return (
        <Wrapper>
            {
                cardInformation.map((item) => (
                    <Card>
                        <div className='image-wrapper'>
                            <img src={ item.iconPath }/>
                        </div>
                        <div className='content'>
                            <p> { item.title } </p>
                            <p> { item.description } </p>
                        </div>
                    </Card>
                ))
            }
        </Wrapper>
    )
}

export default Cards;