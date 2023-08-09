import React from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Nav from "../../components/nav";
import NavItem from '../../components/nav-item';
import dark_bg from './img/background-dark.png';
import bg from './img/background.png';
import class_logo from './img/title_classes.png';
import race_logo from './img/title_races.png';
import item_logo from './img/title_items.png';
import structure_logo from './img/title_structures.png';


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
            <Nav>
                <NavItem icon={class_logo} title="Classes" route='/classes'/>
                <NavItem icon={race_logo} title="Races" route='/races'/>
                <NavItem icon={item_logo} title="Items" route='/items'/>
                <NavItem icon={structure_logo} title="Structures" route='/structures'/>
            </Nav>
            <Outlet />
        </Main>
    )

}