import React from 'react';
import { Link } from 'react-router-dom'


const NavItem = ({title, icon, route, tabindex}) => {

    return (
        <Link to={route}> 
            <img 
                src={icon} alt={title.toLowerCase()} 
                height="30px"
                role="button" tabIndex={tabindex}
            ></img>
        </Link>
    )

}

export default NavItem