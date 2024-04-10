import React from 'react';
import styled from "styled-components";
import brand from '../../../../../assets/images/branded.png'
import missionCircle from '../../../../../assets/images/missions-circle.png'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  justify-content: space-between;

  .chart-image {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:first-child {
    flex: 2 1 0;
    min-width: 30%;
  }

  &:nth-child(2) {
    flex: 1 1 0;
   min-width: 25%;
  }

  &:last-child {
    flex: 1 1 0;
    min-width: 25%;
  }

  .small-cards-container {
    display: flex;
  }

  .top-content {
    p:first-child {
      font-size: 14px;
    }

    p:last-child {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

const Progress = styled.div`
  border-radius: 12px;
  height: 10px;
  background: linear-gradient(to right, #FD904B 0, #FD904B 60%, #334BFF 33%, #334BFF 80%, #67AB75 66%, #67AB75 100%);
  margin: 20px 0;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  justify-content: space-between;
  width: 100%;

  .title {
    font-weight: bold;
    margin: 18px 0 8px 0;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }

  p:last-child {
    font-size: 12px;
    color: #7A7A7A;
  }

  .small-box {
    background: ${ props => props.fontColor };
    height: 16px;
    width: 16px;
    margin-right: 6px;
    border-radius: 2px;
  }
`;

const Records = () => {

    const information = [
        {
            color: '#374EFF',
            title: '2.3 K',
            description: 'No. of Missions'
        },
        {
            color: '#FD904B',
            title: '2.3 K',
            description: 'No. of Giveaways'
        },
        {
            color: '#67AB75',
            title: '2.3 K',
            description: 'No. of Internship'
        },

    ]
    return (
        <Wrapper>
            <Card>
                <div className='top-content'>
                    <p>Total No. of Opportunities</p>
                    <p>6.4 K</p>
                </div>

                <Progress/>

                <div className='small-cards-container'>
                    { information.map(item => (
                        <SmallCard fontColor={ item.color }>
                            <div className='small-box'/>
                            <div>
                                <p className='title'>
                                    { item.title }
                                </p>
                                <p>
                                    { item.description }
                                </p>
                            </div>

                        </SmallCard>
                    )) }

                </div>


            </Card>
            <Card>
                <div className='top-content'>
                    <p>Total No. of Opportunities</p>
                    <p>6.4 K</p>
                </div>

                <div>
                    <img src={ brand } className='chart-image'/>
                </div>

            </Card>

            <Card>
                <div className='top-content'>
                    <p>Total No. of Opportunities</p>
                    <p>6.4 K</p>
                </div>
                <div>
                    <img src={ missionCircle } className='chart-image'/>
                </div>
            </Card>

        </Wrapper>
    )
}

export default Records;