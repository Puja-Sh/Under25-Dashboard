import React from 'react';
import Filters from "../../filters";
import opportunityIcon from '../../../../../assets/icons/opportunities-icon.png';
import mockData from '../../../../../mockData.json';
import arrowDown from '../../../../../assets/icons/down-arrow.png';
import snapchat from '../../../../../assets/icons/snapchat.png';

import styled from "styled-components";
import BottomFilter from "../../filters/BottomFilter";

const TableWrapper = styled.div`
  overflow: scroll;
  height: 60vh;
  margin-top: 20px;
  
  table {
    width: 100%;
    border: 1px solid #E8E8E8;
    border-collapse: separate;
    border-radius: 10px;
    overflow: hidden;
    

    th, td {
      padding: 10px;
      border-right: 1px solid #E8E8E8;
      width: 200px;
      font-size: 14px;
    }

    th:first-child {
      border-top-left-radius: 10px;
    }
    
    th:last-child {
      border-top-right-radius: 10px;
    }
    
    tr {
      display: flex;
    }

    th:first-child {
      width: 250px;
    }
    
    td:first-child {
      display: flex;
      width: 250px;
      
      img {
        height: 32px;
        width: 32px;
        margin-right: 10px;
      }
    }

    td:nth-child(n+2) {
      color: #666666;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    th {
      display: flex;
      background: #F8F8F8;
      justify-content: space-between;
      flex-grow: 1;
      cursor: pointer;

      div {
        display: flex;
        flex-direction: column;
      }

      img {
        height: 12px;
        width: 12px;
      }

      .down {
        transform: rotate(180deg);
      }
    }


    //---- body ----

    tbody {
      //width: 100%;
     
      td {
        border-right: 1px solid #EAECF0;
        border-bottom: 1px solid #EAECF0;
        
      }
    }
  }
`;

const OpportunityView = () => {
    return (
        <div>
            <Filters title='Opportunities' icon={ opportunityIcon }/>

            <TableWrapper>
                <table>
                    {/*<thead>*/ }
                    <tr>
                        <th className='title'> Name
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> Mission ID
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> Brand
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> Start
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> End
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> Type
                            <div>
                                <img src={ arrowDown } className='down'/> <img src={ arrowDown } className='up'/>
                            </div>
                        </th>
                        <th className='title'> Openings
                            <div>
                                <img src={ arrowDown } className='up'/> <img src={ arrowDown } className='down'/>
                            </div>
                        </th>
                    </tr>
                    {/*</thead>*/ }
                    <tbody>
                    {
                        mockData.map((item, index) => (
                            <tr key={ index }>
                                <td>
                                    <img src={ snapchat } className='table-image'/>
                                    { item.name }
                                </td>
                                <td>{ item.missionID }</td>
                                <td>{ item.brand }</td>
                                <td>{ item.start }</td>
                                <td>{ item.end }</td>
                                <td>{ item.type }</td>
                                <td>{ item.openings }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </TableWrapper>

            <BottomFilter/>
        </div>
    )
}

export default OpportunityView;