import React from 'react';
import {NavLink ,useLocation  } from "react-router-dom";
import "../scss/nav.scss";
const Navmenu = props => {

    return(
        <nav>
            <ul>
                <li> 
                    <NavLink to="/Home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>即時新聞</NavLink>
                </li>
                <li className="hidde"> 
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>新聞集</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Business" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>商業</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Entertainment" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>娛樂</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Healthy" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>健康站</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Science" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>科學</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Sports" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>運動</NavLink> 
                </li>
                <li> 
                    <NavLink to="/Technology" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>技術</NavLink> 
                </li>
            </ul>
        </nav>
    )
};
export default Navmenu;