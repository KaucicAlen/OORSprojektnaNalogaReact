import React from 'react';
import { Link } from 'react-router-dom';
import Noga from './Noga';
import Projekti from './Projekti';
import '../css/More.css';



function SeznamDel() {

    return (
        <div>

            <ul>
                <li><Link to="/VsiProjekti">Vsi Projekti</Link></li>
                <li><Link to="/AktivniProjekti">Aktivni Projekti</Link></li>
                <li><Link to="/ZaključeniProjekti">Zaključeni Projekti</Link></li>
                <li><Link to="/PrekinjeniProjekti">Prekinjeni Projekti</Link></li>
            </ul>
        </div>
    )
}

export default SeznamDel