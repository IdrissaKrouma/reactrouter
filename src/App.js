import {Routes, Route, Link, useLocation } from "react-router-dom";
import ListFimls from './ListFilms';
import List from './films';
import './App.css';
import { useState ,  } from 'react';
import FilmCard from "./FilmCard";

function App() {

  const [filter, setFilter] = useState('')

  const [etat, setEtat] = useState(true)
  const [etat_enhaut, setEtatHaut] = useState('block')
  const [etat_enbas, setEtatBas] = useState('none')

  const [titre, setTitre] = useState('')
  const [des, setDes] = useState('')
  const [Url, setUrl] = useState('')
  const [note, setNote] = useState('')

  

  const change = () =>{
    if(etat === true){
      setEtatHaut('none')
      setEtatBas('flex')
    }
    else{
      setEtatBas('none')
      setEtatHaut('flex')
    }
    setEtat(!etat)
  }

  const Ajouter = (tab, value) =>{
    tab.push(value)
    setTitre('')
    setDes('')
    setUrl('')
    setNote('')
  }


  const Description = () =>{

    const infos = (liste,condition) => {
      return liste.find(elt => elt.id == condition)
    }

    const location = useLocation()
    const fichefilm = {...infos(List, location.pathname.substring(6))}
    return(
      <FilmCard titre={fichefilm.titre} description={fichefilm.description} posterUrl={fichefilm.posterURL} note={fichefilm.note} key = {fichefilm.id}/>
    )
  }
    

  return (
    <>
        <div className='App'>
        <nav>
          <Link to='/'><h1>VOIRFILMS</h1></Link>
          <div className='rechercher'>
            <input  type="text" value={filter} placeholder='Filter' id='search'
              onChange={event => {
                setFilter(event.target.value);
            }}/>
            <label htmlFor='search'><span  id='icone_rechercher' class="material-symbols-outlined">search</span></label>
          </div>
          <div className='ajouter'>
            <div className='entete'>
              <span id='icone_ajouter' class="material-symbols-outlined">movie_info</span>
              <h4>AJOUTER UN FILM</h4>
              <button onClick={change} >
                <span style={{display: etat_enhaut}} id='enhaut'class="material-symbols-outlined">keyboard_arrow_up</span>
                <span style={{display: etat_enbas}} id='enbas' class="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
            </div>
            <form style={{display: etat_enbas}} className='corps'>
              <label className='elt_corps' htmlFor="titre">Titre</label>
              <input type="text" value={titre} id='titre' onChange={event => {setTitre(event.target.value);}} required/>
              <label className='elt_corps' htmlFor="description">Description</label>
              <textarea name="description" id="description" value={des} cols="30" rows="10" onChange={event => {setDes(event.target.value);}} required></textarea>
              <label className='elt_corps' htmlFor="Url">URL DU FILM</label>
              <input type="url" value={Url} id='Url' onChange={event => {setUrl(event.target.value);}} required/>
              <label className='elt_corps' htmlFor="note"  >Note</label>
              <input type="number" id='note'  value={note} max={5} min={1} maxLength={1} step={1} onChange={event => {setNote(event.target.value);}} required></input>
              <button onClick={event => {Ajouter(List,{titre : titre, description : des, posterURL : Url, note : note,id: List.length+1})}}>AJOUTER</button>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path="/" element= {<ListFimls films ={List} cond ={filter}/>}/>
          <Route  path="film/:id" element= {<Description />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
