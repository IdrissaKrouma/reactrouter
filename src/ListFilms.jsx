import FilmCard from './FilmCard';
import Filter from './Filter';

import './App.css';
import { useNavigate, Outlet, Link } from 'react-router-dom';


function ListFilms(props) {
  const Listfilms = props.films
  const condition = props.cond

  const navigate = useNavigate()

  return (
    <>
      <div className='ListFilms'>
          {Filter(Listfilms,condition).map((elt) => {
            return (
              <Link className='lienfiche' to={`film/${elt.id}`} onClick={() => navigate(`film/${elt.id}`)}>
                <FilmCard titre={elt.titre} description={elt.description} posterUrl={elt.posterURL} note={elt.note} key = {elt.id}/>
              </Link>
          )})}
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export  default ListFilms;