import React from 'react';
import '../css/Header.css';

function NavBar(){
    return(
        <div className="header">
            <ul>
                <li>Domov</li>
                <li>O podjetju</li>
                <li>Projekti</li>
            </ul>
        </div>
    )
}

export default NavBar