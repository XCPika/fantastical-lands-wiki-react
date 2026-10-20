import React, { Children } from 'react';
import './nav.scss';
import nav_icon_logo from '../../app/img/nav/nav-bar-icon.webp'
import nav_title_logo from '../../app/img/nav/title_fantastical_lands.webp'
import StoneBorderSeperator from '../stone_border';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const arrayChildren = Children.toArray(props.children);
    const leftChildren = arrayChildren.slice(0, 2);
    const rightChildren = arrayChildren.slice(2, 4);
    
    return (
        <header>
            <nav className="site-nav">
                <div className="nav-left">
                    {leftChildren}
                </div>
                <Link to='/' className='nav-center'>
                    <img 
                        src={nav_icon_logo} alt="Fantastical Lands Server Icon"
                        className="nav-icon-logo"
                        role="button"  tabIndex="2"
                    ></img>
                </Link>
                <div className="nav-right">
                    {rightChildren}
                </div>
            </nav>
            <StoneBorderSeperator/>
            <Link to='/' className="nav-title-link" aria-label="Fantastical Lands home">
                <img src={nav_title_logo} alt="Fantastical Lands" id="nav-title" />
            </Link>
        </header> 
    )

}
