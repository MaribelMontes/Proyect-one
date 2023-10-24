import Saludo  from './Components/Saludo';
import Navegacion from './Components/Navegacion';
import ListSeries from './Components/ListSeries';
import dataSerie from './data/Serie';
import { useState } from 'react';
import ListFavoritos from './Components/ListFavoritos';
import CreateSerie from './Components/CreateSerie';

function App() {
  const [listSeries, setListSeries] = useState(dataSerie);
  const [listSeriesFavoritas, setListSeriesFavoritas] = useState([]);

  function addSerieFavorites(element) {
    // Verificar si ya existe una serie con el mismo nombre en la lista de favoritos
    const isAlreadyInFavorites = listSeriesFavoritas.some((favorite) => favorite.Title === element.Title);

    if (!isAlreadyInFavorites) {
      const tempListSeries = [...listSeriesFavoritas];
      tempListSeries.push(element);
      setListSeriesFavoritas(tempListSeries);
    }
  }

  function newSerie (element){
    setListSeries([...listSeries, element]);

  }

  function handleRemoveFavorite(updatedFavorites) {
    setListSeriesFavoritas(updatedFavorites);
  }
  return (
   
    <div>
      <Navegacion/>
      <div className="text-center"><h1>Asian Series Catalog</h1></div>
     <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <ListSeries 
                elements={listSeries} 
                fnAddFavorites = {addSerieFavorites}/>
        </div>
        <div className='col-md-3'>
          <CreateSerie fnNewSerie = {newSerie}/>
        <ListFavoritos elements={listSeriesFavoritas} onRemoveFavorite={handleRemoveFavorite} />
        </div>
  
      </div>
     </div>
     
      
    
    </div>
 
  );
}

export default App;
