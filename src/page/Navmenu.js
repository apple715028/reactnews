import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink ,
    Link  } from "react-router-dom";
import "../scss/nav.scss";
import Taipei from '../page/Travel/Taipei';
const Navmenu = props => {

    return(
        <nav>
            <ul>
                <li> 
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>即時新聞</NavLink>
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
                <li> 
                    <span className={({ isActive }) => (isActive ? 'active' : 'inactive')}>旅遊</span> 
                    <ul className='childmenu'>
                        <li><Link to="/Travel/Taipei">台北</Link> </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};
export default Navmenu;