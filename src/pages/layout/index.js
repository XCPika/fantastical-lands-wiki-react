import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from 'styled-components';

import { DarkModeContext } from "../../middleware/context/dark-mode";
import Nav from "../../components/nav";
import NavItem from '../../components/nav-item';
import Footer from "../../components/footer";
/* IMAGES */
import dark_bg from '../../app/img/page/background-dark.webp';
import bg from '../../app/img/page/background.webp';
import dark_mode_logo from '../../app/img/page/dark_mode/dark-mode.png';
import light_mode_logo from '../../app/img/page/dark_mode/light-mode.png';
import logo from '../../app/img/logo512.png';
import nav_title_logo from '../../app/img/nav/title_fantastical_lands.webp';
import home_logo from '../../app/img/page/HOME.png'
import class_logo from './img/title_classes.png';
import race_logo from './img/title_races.png';
import item_logo from './img/title_items.png';
import structure_logo from './img/title_structures.png';


const Page = styled.div`
    color: #1c1c1c;
    display : flex;
    align-items: stretch;
    min-height: 100svh;
    max-height: 100svh;
    flex-direction: column;
    background-image: url(${props => props.$darkMode ? dark_bg : bg});
`

const PageHeading = styled.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    height: clamp(28px, 5vh, 46px);
    margin-top: clamp(1.5rem, 3vh, 2.5rem);

    img {
        display: block;
        max-width: min(42vw, 320px);
        max-height: 100%;
        object-fit: contain;
    }
`

const Main = styled.main`
`

export default function Layout() {

    const { darkMode, updateDarkMode } = useContext(DarkModeContext)
    const { pathname } = useLocation()
    const pageHeadings = {
        "/": { image: home_logo, title: "Home" },
        "/classes": { image: class_logo, title: "Classes" },
        "/races": { image: race_logo, title: "Races" },
        "/items": { image: item_logo, title: "Items" },
        "/structures": { image: structure_logo, title: "Structures" },
    }
    const pageHeading = pageHeadings[pathname] || pageHeadings["/"]

    return (
        <Page className={`page ${darkMode ? "dark-mode" : null}`} $darkMode={darkMode}>
            <div style={{ background: "#d10000", color: "#fff" }}>WORK IN PROGRESS</div>

            <Nav>
                <NavItem icon={class_logo} title="Classes" route='/classes' />
                <NavItem icon={race_logo} title="Races" route='/races' />
                <NavItem icon={item_logo} title="Items" route='/items' />
                <NavItem icon={structure_logo} title="Structures" route='/structures' />
            </Nav>
            <PageHeading>
                <img src={pageHeading.image} alt={`${pageHeading.title} page`} />
            </PageHeading>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <div className="main-footer">
                    <div style={{ display: "flex", flexGrow: "1" }}>
                        <img
                            src={logo}
                            alt="IR Freelance Logo"
                            width="25px" height="25px"
                            className="social" aria-label="IR Freelance Logo"
                            role="button" onClick={() => { window.open("https://irfreelance.com") }}
                        />
                        <p style={{ margin: "auto", paddingLeft: '1%' }}>© IR Freelance (2026)</p>
                    </div>
                    <img
                        src={darkMode ? light_mode_logo : dark_mode_logo}
                        alt="Dark Mode toggle icon"
                        id="dark-mode-toggle" width="25px" height="25px"
                        role="button" onClick={() => { updateDarkMode(!darkMode) }}
                    />
                </div>
            </Footer>
        </Page>
    )

}