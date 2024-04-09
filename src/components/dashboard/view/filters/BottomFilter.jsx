import React from 'react';
import styled from "styled-components";
import Pagination from "./Pagination";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Left = styled.div`
  .filter-icon {
    padding: 8px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
  }

  .dropdown {
    position: relative;

    .select-placeholder {
      position: absolute;
      color: #666666;
      font-size: 16px;
      top: 6px;
      left: 8px;
    }

    .filter-icon.select.duration-select {
      width: 180px;
      padding-left: 75px;
    }

    .filter-icon.select {
      padding-left: 60px;
      width: 118px;
    }
  }
`;

const Right = styled.div`


`;

const BottomFilter = () => {
    return (
        <Wrapper>
            <Left>
                <div className='dropdown'>
                    <p className='select-placeholder'>Show:</p>
                    <select name="type" id="type" className='filter-icon select'>
                        <option value="all" selected>10</option>
                        <option value="saab">20</option>
                        <option value="mercedes">30</option>
                        <option value="audi">40</option>
                    </select>

                    per page
                </div>
            </Left>
            <Right>
                <Pagination/>
            </Right>
        </Wrapper>
    )
}

export default BottomFilter;
