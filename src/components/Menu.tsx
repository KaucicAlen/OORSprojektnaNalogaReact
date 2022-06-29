import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import "../css/Header.css";
import Slika1 from '../slike/brickWall.jpg'

function Menu(){

    return(
        <div>
            <Header naziv="Gradbeno podjetje"/>
            <div className="menu">
            <ul>
                <li><Link to="/">Domov</Link></li>
                <li><Link to="/About">O Podjetju</Link></li>
                <li><Link to="/Projekti">Projekti</Link></li>
                <li><Link to="/dodajProjekt">Nov Projekt</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Menu

