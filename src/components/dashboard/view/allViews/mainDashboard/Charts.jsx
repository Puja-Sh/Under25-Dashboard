import React from 'react';
import styled from "styled-components";
import opportunity from '../../../../../assets/images/opportunities.png';
import missions from '../../../../../assets/images/missions.png';

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  justify-content: space-between;

  &:first-child, &:last-child{
    flex: 1 1 0;
    width: 40%;
  }
  
  .small-cards-wrapper {
    display: flex;
  }

  .contents {
    margin-bottom: 20px;

    p:first-child {
      font-size: 18px;
    }

    p:last-child {
      font-size: 14px;
      color: #666666;
    }
  }

  &:first-child {
    margin-right: 12px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SmallCards = styled.div`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid #F2F2F2;
  margin-right: 8px;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  
  .small-box {
    background: ${props => props.fontColor};
    height: 10px;
    width: 10px;
    margin-right: 6px;
    border-radius: 2px;
  }
`;


const Charts = () => {
    const smallCards = [
        { color: '#374EFF', text: "Missions" },
        { color: '#FD904B', text: "Giveaways" },
        { color: '#67AB75', text: "Jobs/Internships" },]

    return (
        <Wrapper>
            <Card>
                <div className='contents'>
                    <p className='title'> No. of Opportunities </p>
                    <p className='description'> Listed per day </p>
                </div>

                <div className='small-cards-wrapper'>
                    { smallCards.map((item) => (
                        <SmallCards fontColor={ item.color }>
                            <div className='small-box'/>
                            { item.text }
                        </SmallCards>
                    )) }
                </div>

                <div>
                    <img src={ opportunity }/>
                </div>
            </Card>
            <Card>
                <div className='contents'>
                    <p className='title'> No. of Opportunities </p>
                    <p className='description'> Evaluated per day </p>
                </div>

                <div>
                    <img src={ missions }/>
                </div>

            </Card>
        </Wrapper>
    )
}

export default Charts;