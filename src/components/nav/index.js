import React, { Children } from 'react';
import './nav.scss';
import nav_icon_logo from './img/nav-bar-icon.png'
import nav_title_logo from './img/title_fantastical_lands.png'
import StoneBorder from '../stone_border';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const arrayChildren = Children.toArray(props.children);
    const leftChildren = arrayChildren.slice(0, 2);
    const rightChildren = arrayChildren.slice(2, 4);
    
    return (
        <header>
            <nav>
                <div className="nav-left">
                    {leftChildren}
                </div>
                <Link to='/' className='nav-center'>
                    <img 
                        src={nav_icon_logo} alt="Fantastical Lands Server Icon"
                        width="65vw"
                        role="button"  tabIndex="2"
                    ></img>
                    <img 
                        src={nav_title_logo} alt="Fantastical Lands Title Logo" 
                        id="nav-title" height="75%" 
                        role="button" 
                    ></img>
                </Link>
                <div className="nav-right">
                    {rightChildren}
                </div>
            </nav>
            <StoneBorder/>
        </header> 
    )

}
