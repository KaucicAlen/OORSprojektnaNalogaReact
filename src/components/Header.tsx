import React from 'react';
import '../css/Header.css';
import Slika1 from '../slike/brickWall.jpg'



interface headerProps{
    naziv: string,
}

function Header(props: headerProps){
    return(
        <div className="naslov">
            <span>{props.naziv}</span>
        </div>
    )
}

export default Header