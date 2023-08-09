import React from "react";
import { styled } from "styled-components";
import StoneBorder from "../stone_border";
import nav_bg from '../nav/img/nav-bar.png'

const FooterDiv = styled.div`
    justify-content: flex-end;
    background-image: url(${nav_bg});
    max-height: min-content;
    width: 100svw;
    position: fixed;
    bottom: 0;
`

export default function Footer(props) {

    return (
            
        <FooterDiv>
            <StoneBorder/>
            {props.children}
        </FooterDiv>
    )

}