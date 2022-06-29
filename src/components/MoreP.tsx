import React from 'react';
import '../css/gumbi.css';
import '../css/More.css';

import { useParams } from 'react-router-dom';
import { stringify } from 'querystring';
import Projekti from './Projekti';


enum Stanja{
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
};

interface projektiProps {
    projekti: Projekt[];
    onChange: (projekti: Projekt[]) => any;

};

function MoreP(props: projektiProps) {

    const { id }: any = useParams();

    let index = 0;

    for (let i = 0; i < props.projekti.length; i++) {
        if (props.projekti[i].id == id) {
            index = i
        }
    }

    const [projekti, setProjekti] = React.useState(props.projekti[index]);

    const handleNazivClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.naziv;

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.naziv = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.naziv = novaVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }
    
    const handleCenaClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.cena;

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.cena = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.cena = parseInt(novaVrednost);
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }
    const handleOpisClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.opis;

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.opis = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.opis = novaVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }
    const handleLokacijaClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.lokacija;
        novaVrednost?.toLocaleLowerCase();

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.lokacija = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.lokacija = novaVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }
    const handleSteviloDelavcevClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.steviloDelavcev;

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.steviloDelavcev = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.steviloDelavcev = parseInt(novaVrednost);
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }

    const handleSlikaClick = () => {
        let el = { ...projekti };
        let novaVrednost = prompt("Vnesi novo vrednost");
        let staraVrednost = el.slika;

        if (novaVrednost == null || novaVrednost == "") {
            alert("Napaka pri vnosu")
            el.slika = staraVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        } else {
            el.slika = novaVrednost;
            setProjekti(el);
            let novoPolje = props.projekti;
            for (let i = 0; i < novoPolje.length; i++) {
                if (novoPolje[i].id == id) {
                    novoPolje[i] = el;
                    props.onChange(novoPolje)
                }
            }
        }
    }

    

    let najdenProjekt = props.projekti.filter(obj => { return obj.id == id });


    return (
        <div>
            <ul>
                <li><span onClick={handleNazivClick}>Naziv Projekta: {najdenProjekt[0].naziv}</span></li>
                <li><span onClick={handleCenaClick}>Cena Projekta: {najdenProjekt[0].cena} $</span></li>
                <li><span onClick={handleOpisClick}>Opis Projekta: {najdenProjekt[0].opis}</span></li>
                <li><span onClick={handleLokacijaClick}>Lokacija Projekta: {najdenProjekt[0].lokacija}</span></li>
                <li><span onClick={handleSteviloDelavcevClick}>Števio delavcev: {najdenProjekt[0].steviloDelavcev}</span></li>
                <li><span onClick={handleSlikaClick}>Slika Projekta: {najdenProjekt[0].slika}</span></li>
                <li><span>Razlog za prekinitev projekta: {najdenProjekt[0].razlogZaPrekinitev}</span></li>
            </ul>

            <div className="btn">
                <ul>
                    <li><button className="odstranibtn" onClick={() => {
                        for (let i = 0; i < props.projekti.length; i++) {
                            if (props.projekti[i].id == id) {
                                let novoPolje = props.projekti;
                                novoPolje.splice(index, 1);
                                props.onChange(novoPolje);
                                alert("Projekt uspesno odstranjen!");
                            }
                        }
                    }}>Odstrani iz seznama</button></li>
                </ul>
            </div>













        </div>
    )
}

export default MoreP