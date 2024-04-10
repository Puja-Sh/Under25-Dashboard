import React from 'react';
import Filters from "../../filters";
import assigned from "../../../../../assets/icons/assigned-icon.png";
import arrowDown from "../../../../../assets/icons/down-arrow.png";
import mockData from "../../../../../mockData.json";
import snapchat from "../../../../../assets/icons/snapchat.png";
import BottomFilter from "../../filters/BottomFilter";
import styled from "styled-components";

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

    tr th:first-child, tr td:first-child {
      width: 300px;
    }

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

    td:first-child {
      display: flex;

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
      //flex-grow: 1;
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
      .empty-colspan {
        border: none;
      }

      .Completed {
        p {
          background: #419653;
          padding: 4px 12px 4px 12px;
          color: #fff;
          border-radius: 4px;
        }
      }

      .Evaluating {
        p {
          background: #FC741E;
          padding: 4px 12px 4px 12px;
          color: #fff;
          border-radius: 4px;
        }
      }

      td {
        border-right: 1px solid #EAECF0;
        border-bottom: 1px solid #EAECF0;
      }

      td.colspan {
        width: 100%;
        align-items: center;
        justify-content: center;

        p {
          display: flex;
          position: relative;
          transform: translateX(-405px);
        }
      }

      .colspan:nth-child(2) {
        background: #ECF5EE;
        color: #2E6B3B;
      }

      td.colspan:nth-child(n+3) {
        background: #FFF1E9;
        color: #B35215;
      }

      td.colspan:nth-child(n+9) {
        background: #E5E8FF;
        color: #0015B5;
      }
    }
  }
`;

const AssignedView = () => {
    return (
        <div>
            <Filters title='Assigned to Me' icon={ assigned }/>

            <TableWrapper>
                <table>
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
                        <th className='title'> Mission Status
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
                    <tbody>
                    {
                        mockData.map((item, index) => (

                            <>
                                {
                                    index % 3 === 0 && index < 9 ?
                                        <>
                                            <td colSpan={ 7 } className='empty-colspan'></td>
                                            <td colSpan={ 7 } className='colspan'>
                                                <p>{ index === 0 ? 'Admin' : index === 3 ? 'Moderator' : 'Evaluator' }</p>
                                            </td>
                                        </>

                                        : null
                                }
                                <tr key={ index }>
                                    <td>
                                        <img src={ snapchat } className='table-image'/>
                                        { item.name }
                                    </td>
                                    <td>{ item.missionID }</td>
                                    <td>{ item.brand }</td>
                                    <td className={ item.missionStatus }><p>{ item.missionStatus }</p></td>
                                    <td>{ item.start }</td>
                                    <td>{ item.end }</td>
                                    <td>{ item.type }</td>
                                    <td>{ item.openings }</td>
                                </tr>
                            </>

                        ))
                    }
                    </tbody>
                </table>
            </TableWrapper>

            <BottomFilter/>
        </div>
    )
}

export default AssignedView;