import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Slika1 from '../slike/about.jpg';
import Slika2 from '../slike/projekti.jpg';
import Slika3 from '../slike/novProjekt.jpg';
import '../css/main.css'

function SelectMenu() {
    return (
        <div>
            <div className="clearfix">

                <div className="imgContainer">
                    <Link to="/About"><img src={Slika3} /></Link>
                    <h1 className="zgorajNapis">O nas</h1>
                </div>

                <div className="imgContainer">
                    <Link to="/Projekti"><img src={Slika2} /></Link>
                    <h1 className="sredinaNapis">Projekti</h1>
                </div>

                <div className="imgContainer"> 
                <Link to="/dodajProjekt"><img src={Slika1} /></Link>
                <h1 className="spodajNapis">Nov Projekt</h1>
                </div>

            </div>




        </div>
    )
}

export default SelectMenu;