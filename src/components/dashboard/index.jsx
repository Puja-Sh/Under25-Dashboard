import React, { useState } from 'react';
import Nav from "./nav/Nav";
import View from "./view/View";
import styled from "styled-components";
import dashboardIcon from "../../assets/icons/dashboard-icon.png";
import opportunitiesIcon from "../../assets/icons/opportunities-icon.png";
import assignedIcon from "../../assets/icons/assigned-icon.png";

const Wrapper = styled.div`
  height: 100vh;
  background: #F8F8F8;
  width: 100%;
  display: flex;
`;

const Dashboard = () => {
    const [selected, setSelected] = useState(0);

    const selectHandler = (index) => {
        setSelected(index)
    }

    const navOptions = [
        {
            icon: `${ dashboardIcon }`,
            label: 'Dashboard',
            value: 'dashboard',
        },
        {
            icon: `${ opportunitiesIcon }`,
            label: 'Opportunities',
            value: 'opportunities'
        },
        {
            icon: `${ assignedIcon }`,
            label: 'Assigned to me',
            value: 'assigned'
        }
    ]

    return (
        <Wrapper>
            <Nav navOptions={ navOptions } selectHandler={ selectHandler }/>
            <View selected={ selected }/>
        </Wrapper>
    )
}

export default Dashboard;