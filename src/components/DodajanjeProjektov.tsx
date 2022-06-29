import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Projekti from './Projekti';
import Noga from './Noga';
import { v4 as uuid } from 'uuid';
import { stringify } from 'querystring';
import '../css/More.css';
import '../css/gumbi.css';


enum Stanja{
    aktivno ,
    prekinjeno,
    zakljuceno
}

interface Projekt{
    id: string
    naziv: string,
    cena: number,
    opis: string,
    lokacija: string,
    steviloDelavcev: number,
    stanjeGradnje: Stanja,
    slika: string,
    razlogZaPrekinitev?: string,

}

interface addProps{
    onAdd: (projekt: Projekt) => any;
}


function DodajanjeProjektov(props: addProps) {

    const [naziv, setNaziv] = React.useState<string>("Test");
    const [cena, setCena] = React.useState<number>(100);
    const [opis, setOpis] = React.useState<string>("Testni opis mojega projekta");
    const [lokacija, setLokacija] = React.useState<string>("Gornja Radgona");
    const [stDelavcev, setStDelavcev] = React.useState<number>(5);
    const [stanjeGradnje, setStanjeGradnje] = React.useState<Stanja>(Stanja.aktivno);
    const [slika, setSlika] = React.useState<string>("Slika.png");

    const unique_id = uuid();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onAdd({id: unique_id, naziv: naziv, cena: cena, opis: opis, lokacija: lokacija, steviloDelavcev: stDelavcev, stanjeGradnje: stanjeGradnje, slika: slika})
    }

    const handleChangeNaziv = (e: ChangeEvent<HTMLInputElement>) => {
        setNaziv(e.target.value);
    }
    const handleChangeCena = (e: ChangeEvent<HTMLInputElement>) => {
        setCena(parseInt(e.target.value));
    }

    const hadnleChangeOpis = (e: ChangeEvent<HTMLInputElement>) => {
        setOpis(e.target.value);
    }
    const handleChangeLokacija = (e: ChangeEvent<HTMLInputElement>) => {
        setLokacija(e.target.value.toLowerCase());
    }
    const handleChangeStDelavcev = (e: ChangeEvent<HTMLInputElement>) => {
        setStDelavcev(parseInt(e.target.value));
    }
    const handleChangeStanjeGradnje = (e: ChangeEvent<HTMLSelectElement>) => {
        setStanjeGradnje(parseInt(e.target.value));
    }
    const handleChangeSlika = (e: ChangeEvent<HTMLInputElement>) => {
        setSlika(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Naziv: </label>
                <input type="text" name="naziv" onChange={handleChangeNaziv}/>
                <br />
                <label>Cena: </label>
                <input type="number" name="cena" onChange={handleChangeCena}/>
                <br />
                <label>Opis: </label>
                <input type="text" name="opis" onChange={hadnleChangeOpis}/>
                <br />
                <label>Lokacija: </label>
                <input type="text" onChange={handleChangeLokacija}/>
                <br />
                <label>Število delavcev: </label>
                <input type="number" name="stDelavcev" onChange={handleChangeStDelavcev}/>
                <br />
                <label>Stanje Gradnje: </label>
                
                <select onChange={handleChangeStanjeGradnje}>
                    <option value="0">Aktivno</option>
                    <option value="1">Prekinjeno</option>
                    <option value="2">Zaključeno</option>
                </select>
                <br />
                <label>Slika: </label>
                <input type="text" onChange={handleChangeSlika}/>
                <br/>
                <input type="submit" value="Dodaj Projekt" onClick={() => alert("Nov projekt dodan")}/>
            </form>
            
        </div>
    )
}

export default DodajanjeProjektov;