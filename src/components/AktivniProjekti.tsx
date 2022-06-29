import React from 'react';
import { Link } from 'react-router-dom';
import Projekti from './Projekti';
import '../css/More.css';

enum Stanja {
    aktivno,
    prekinjeno,
    zakljuceno
}

interface Projekt {
    id: string,
    naziv: string,
    cena: number,
    opis: string,
    lokacija: string,
    steviloDelavcev: number,
    stanjeGradnje: Stanja,
    slika: string,
    razlogZaPrekinitev?: string,

}

interface teloProps {
    projekti: Projekt[];
}

function AktivniProjekti(props: teloProps) {
    const { projekti } = props;




    let napis = "";

    const rezulat = projekti.filter(projekt => projekt.stanjeGradnje == Stanja.aktivno)

    if (rezulat.length == 0) {
        napis = "Trenutno ni nobenih prekinjenih projektov"
    }

    return (
        <div>
            {napis}
            <ul>
                {rezulat.map((el) => (
                    <Link to={`/more/${el.id}`}><Projekti key={el.id} id={el.id} naziv={el.naziv} cena={el.cena} opis={el.opis} lokacija={el.lokacija} steviloDelavcev={el.steviloDelavcev} stanjeGradnje={el.stanjeGradnje} slika={el.slika}></Projekti></Link>
                ))}
            </ul>
        </div>
    )
}


export default AktivniProjekti;