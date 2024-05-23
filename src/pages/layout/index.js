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
import Footer from "../../components/footer";


const Page = styled.div`
    color: #1c1c1c;
    display : flex;
    align-items: stretch;
    min-height: 100svh;
    max-height: 100svh;
    flex-direction: column;
    background-image: url(${props => props.dark_mode ? dark_bg : bg});
`

const Main = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 1;
`

export default function Layout() {

    return (
        <Page dark_mode={true}>
            <Nav>
                <NavItem icon={class_logo} title="Classes" route='/classes'/>
                <NavItem icon={race_logo} title="Races" route='/races'/>
                <NavItem icon={item_logo} title="Items" route='/items'/>
                <NavItem icon={structure_logo} title="Structures" route='/structures'/>
            </Nav>
            <Main>
                <Outlet/>
            </Main>
            <Footer>
                <button></button>
            </Footer>
        </Page>
    )

}