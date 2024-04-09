import React from 'react';
import styled from "styled-components";
import userImage from '../../../assets/icons/user-image.png';
import MainDashboard from "./allViews/mainDashboard/MainDashboard";
import OpportunityView from "./allViews/opportunity/opportunityView";
import add from '../../../assets/icons/add.png'
import AssignedView from "./allViews/assignedToMe/AssignedView";

const Wrapper = styled.div`
  width: calc(100% - 320px);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  .right-side {
    display: flex;
    margin-left: auto;

    .create-mission-btn {
      margin-right: 20px;
      padding: 0 12px;
      border-radius: 8px;
      background: #1F1F1F;
      color: #fff;
      font-size: 16px;
      display: flex;
      align-items: center;
      
      img {
        width: 16px;
        height: 16px;
        margin-right: 7px;
      }
    }

    .user-info {
      display: flex;

      .user-name {
        font-weight: bold;
        font-size: 18px;
      }

      div {
        text-align: right;
      }
    }
  }

  .user-image {
    height: 40px;
    width: 40px;
    margin-left: 15px;
  }
`;

const MainBody = styled.div`
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #F2F2F2;
  background: #FFFFFF;
  height: fit-content;
  margin-top: 20px;
`;

const View = ({ selected }) => {

    const getComponent = () => {
        switch (selected) {
            case 0 : return <MainDashboard/>
            case 1 : return <OpportunityView/>
            case 2 : return <AssignedView/>
        }
    }
    return (
        <Wrapper>
            <Header>
                {
                    selected === 0 ? <div>
                        <p className='title'>Dashboard</p>
                        <p>Opportunity analysis</p>
                    </div> : null
                }

                <div className='right-side'>
                    { selected >= 1 && <button className='create-mission-btn'> <img src={add}/> Create Mission</button> }
                    <div className='user-info'>
                        <div>
                            <p>Welcome</p>
                            <p className={ 'user-name' }>John Smith</p>
                        </div>
                        <img src={ userImage } alt='john smith' className='user-image'/>
                    </div>
                </div>
            </Header>

            <MainBody>
                {getComponent()}
            </MainBody>
        </Wrapper>
    )
}

export default View;