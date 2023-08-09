import React from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components'
import Nav from "../../components/nav";
import dark_bg from './img/background-dark.png'
import bg from './img/background.png'


const Main = styled.div`
    color: #1c1c1c;
    display : flex;
    align-items: stretch;
    min-height: 100svh;
    flex-direction: column;
    background-image: url(${props => props.dark_mode ? dark_bg : bg});
`

export default function Layout() {

    return (
        <Main dark_mode={false}>
            <Nav/>
            <Outlet />
        </Main>
    )

}