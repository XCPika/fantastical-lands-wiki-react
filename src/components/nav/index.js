import React from 'react';
import NavItem from './nav-item';
import './nav.scss';
import class_logo from './img/title_classes.png'
import race_logo from './img/title_races.png'
import item_logo from './img/title_items.png'
import structure_logo from './img/title_structures.png'
import nav_icon_logo from './img/nav-bar-icon.png'
import nav_title_logo from './img/title_fantastical_lands.png'
import StoneBorder from '../stone_border';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <header>
            <nav>
                <div className="nav-left">
                    <NavItem icon={class_logo} title="Classes" route='/classes'/>
                    <NavItem icon={race_logo} title="Races" route='/races'/>
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
                    <NavItem icon={item_logo} title="Items" route='/items'/>
                    <NavItem icon={structure_logo} title="Structures" route='/structures'/>
                </div>
            </nav>
            <StoneBorder/>
        </header> 
    )

}
