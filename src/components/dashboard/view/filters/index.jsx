import React from 'react';
import styled from "styled-components";
import search from '../../../../assets/icons/search.png';
import sort from '../../../../assets/icons/sort.png';
import filterIcon from '../../../../assets/icons/filter.png';
import downArrow from '../../../../assets/icons/down-arrow.png';

const Wrapper = styled.div`

`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header {
    display: flex;
    align-items: center;

    p {
      font-size: 28px;
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  .search-div {
    position: relative;

    img {
      height: 16px;
      width: 16px;
      position: absolute;
      z-index: 4;
      top: 11px;
      left: 9px;
    }
  }

  input {
    position: relative;
    padding: 10px 10px 10px 30px;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #F2F2F2;
    color: #666666;
    width: 260px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

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

  .filter-icon {
    padding: 8px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
  }

  .filter-btn {
    height: 32px;
    width: 32px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;


const Filters = ({ title, icon }) => {
    return (
        <Wrapper>
            <Top>
                <div className='header'>
                    <img src={ icon }/>
                    <p> { title } </p>
                </div>

                <div className='search-div'>
                    <img src={ search }/>
                    <input type='text' placeholder='Search'/>
                </div>

            </Top>
            <Bottom>
                <button className='filter-icon filter-btn'><img src={ sort }/></button>
                <button className='filter-icon filter-btn'><img src={ filterIcon }/></button>

                <div className='dropdown'>
                    <p className='select-placeholder'>Type:</p>
                    <select name="type" id="type" className='filter-icon select'>
                        <option value="all" selected>All</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='dropdown'>
                    <p className='select-placeholder'>Status:</p>
                    <select name="type" id="type" className='filter-icon select'>
                        <option value="all" selected>All</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='dropdown'>
                    <p className='select-placeholder'>Duration:</p>
                    <select name="type" id="type" className='filter-icon select duration-select'>
                        <option value="all" selected>This Week</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </Bottom>
        </Wrapper>
    )
}

export default Filters;