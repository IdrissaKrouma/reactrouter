const Filter = (liste,condition) => {
    return liste.filter((elt) => elt.titre.toLowerCase().includes(condition.toLowerCase()) || elt.note.includes(condition))
  }
  
export default Filter ;
  