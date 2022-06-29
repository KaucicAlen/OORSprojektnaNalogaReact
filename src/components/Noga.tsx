import React from 'react';
import '../css/Noga.css'

interface nogaProps{
    imeAvtorja: string;
}

function Noga(props: nogaProps){
    
    const current = new Date();
    const date = current.getFullYear();

    return(
        <div className="noga">
        &copy; {date} {props.imeAvtorja}
    </div>
    )
}

export default Noga;