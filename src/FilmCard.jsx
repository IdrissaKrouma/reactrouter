import './App.css';

function FilmCard(props) {
  const {titre, description, posterUrl, note}= props ;
  
  return (
    <div className="FimlCard">
      <h1>{titre}</h1>
      <p>{description}</p>
      <a href={posterUrl}>Regarder {titre}</a>
      <h5>Note : {note}</h5>
    </div>
  );
}

export default FilmCard;
