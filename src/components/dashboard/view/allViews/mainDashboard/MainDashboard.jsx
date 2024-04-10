import React from 'react';
import styled from "styled-components";
import Cards from "./Cards";
import fileIn from '../../../../../assets/icons/file-in.png'
import fileOut from '../../../../../assets/icons/file-out.png'
import user from '../../../../../assets/icons/assigned-icon.png'
import bag from '../../../../../assets/icons/bag.png';
import currency from '../../../../../assets/icons/currency.png';
import fileTick from '../../../../../assets/icons/file-tick.png';
import gift from '../../../../../assets/icons/gify.png';
import Charts from "./Charts";
import Records from "./Records";

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const MainDashboard = () => {
    const cardInformation = [
        {
            iconPath: `${ currency }`,
            title: "23,5000",
            description: "Total Value of Missions",
        }, {
            iconPath: `${ fileIn }`,
            title: "134",
            description: "No. of Transactions",
        }, {
            iconPath: `${ fileOut }`,
            title: "134",
            description: "Total Amount Claimed",
        }, {
            iconPath: `${ bag }`,
            title: "23,5000",
            description: "No. of Job leads",
        }, {
            iconPath: `${ user }`,
            title: "12",
            description: "Missions Applications",
        }, {
            iconPath: `${ fileTick }`,
            title: "12",
            description: "Missions Submissions",
        }, {
            iconPath: `${ gift }`,
            title: "14",
            description: "Giveaway Applications",
        },
        {
            iconPath: `${ fileTick }`,
            title: "13",
            description: "Giveaway Submissions",
        },

    ]
    return (
        <Wrapper>
            <Records/>
            <Cards cardInformation={ cardInformation }/>
            <Charts/>
        </Wrapper>
    )
}

export default MainDashboard;