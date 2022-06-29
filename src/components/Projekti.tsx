import React from "react";
import Noga from "./Noga";


enum Stanja{
    aktivno,
    prekinjeno,
    zakljuceno
}

interface Projekt{
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

interface projektProps{
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


function Projekti(props: projektProps){


    return (
        <div className="projekti">
          <li>Projekt: {props.naziv}</li>
        </div>
    );
}

export default Projekti;