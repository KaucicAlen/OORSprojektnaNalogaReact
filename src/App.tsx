import React from 'react';
import Projekti from './components/Projekti';
import DodajanjeProjekta from './components/DodajanjeProjektov';
import Noga from './components/Noga';
import SeznamDel from './components/SeznamDel';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useParams } from 'react-router-dom';
import More from './components/More';
import AktivniProjekti from './components/AktivniProjekti';
import ZakljuceniProjekti from './components/ZaključeniProjekti';
import PrekinjeniProjekti from './components/PrekinjeniProjekti';
import MoreP from './components/MoreP';
import MoreZ from './components/MoreZ';
import VsiProjekti from './components/VsiProjekti';
import SelectMenu from './components/SelectMenu';

enum Stanja {
  aktivno,
  prekinjeno,
  zakljuceno
}

interface Projekt {
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

function App() {

  const [aktivniProjekti, setAktivniProjekti] = React.useState<Projekt[]>([]);

  const handleAdd = (projekt: Projekt) => {
    let noviProjekt = Array.from(aktivniProjekti);
    noviProjekt.push(projekt);
    setAktivniProjekti(noviProjekt);
  }

  const handleMoreChange = (noviProjekti: Projekt[]) => {
    setAktivniProjekti(noviProjekti)
  }


  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
        <Route exact path="/">
            <Redirect to="/selectMenu" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projekti">
            <SeznamDel />
          </Route>
          <Route path="/selectMenu">
            <SelectMenu />
          </Route>
          <Route path="/aktivniProjekti">
            <AktivniProjekti projekti={aktivniProjekti} />
          </Route>
          <Route path="/zaključeniProjekti">
            <ZakljuceniProjekti projekti={aktivniProjekti} />
          </Route>
          <Route path="/prekinjeniProjekti">
            <PrekinjeniProjekti projekti={aktivniProjekti} />
          </Route>
          <Route path="/dodajProjekt">
            <DodajanjeProjekta onAdd={handleAdd} />
          </Route>
          <Route path="/more/:id">
            <More projekti={aktivniProjekti} onChange={handleMoreChange} />
          </Route>
          <Route path="/moreP/:id">
            <MoreP projekti={aktivniProjekti} onChange={handleMoreChange} />
          </Route>
          <Route path="/moreZ/:id">
            <MoreZ projekti={aktivniProjekti} onChange={handleMoreChange} />
          </Route>
          <Route path="/vsiProjekti">
            <VsiProjekti projekti={aktivniProjekti} />
          </Route>
        </Switch>
        <Noga imeAvtorja="Gradbeno Podjetje" />
      </div>
    </Router>


  );
}

export default App;
