import React, { ChangeEvent } from 'react'
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

function VsiProjekti(props: teloProps) {
    const { projekti } = props;
    const [naziv, setNaziv] = React.useState<string>("");

    const handleChangeNaziv = (e: ChangeEvent<HTMLInputElement>) => {
        setNaziv(e.target.value);
    }




    let napis = "";

    

    if (projekti.length == 0) {
        napis = "Trenutno ni nobenih projektov"
    }

    const najdeni = projekti.filter(projekt => projekt.lokacija.includes(naziv))


    return (
        <div>
            {napis}
            <br/>
            <label>Lokacija: </label>
            <input type="text" onChange={handleChangeNaziv}/>
            <br/>
            
            <ul>
                {najdeni.map((el) => (
                    <Link to={`/more/${el.id}`}><Projekti key={el.id} id={el.id} naziv={el.naziv} cena={el.cena} opis={el.opis} lokacija={el.lokacija} steviloDelavcev={el.steviloDelavcev} stanjeGradnje={el.stanjeGradnje} slika={el.slika}></Projekti></Link>
                ))}
            </ul>
            
        </div>
    )
}
export default VsiProjekti