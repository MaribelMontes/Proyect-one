import Saludo  from './Components/Saludo';
import Navegacion from './Components/Navegacion';
import ListSeries from './Components/ListSeries';
import dataSerie from './data/Serie';
import { useState, useEffect } from 'react';
import ListFavoritos from './Components/ListFavoritos';
import CreateSerie from './Components/CreateSerie';
import Axios from 'axios';


function App() {
  const [listSeries, setListSeries] = useState([]);
  const [listSeriesFavoritas, setListSeriesFavoritas] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/api/series')
      .then((response) => {
        setListSeries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addSerieFavorites(element) {
    // Verificar si ya existe una serie con el mismo nombre en la lista de favoritos
    const isAlreadyInFavorites = listSeriesFavoritas.some((favorite) => favorite.Title === element.Title);

    if (!isAlreadyInFavorites) {
      const tempListSeries = [...listSeriesFavoritas];
      tempListSeries.push(element);
      setListSeriesFavoritas(tempListSeries);
    }
  }

  async function newSerie (element){
    try {
      // Realiza una solicitud POST al servidor con los datos de la nueva serie
      const response = await Axios.post('http://localhost:4000/api/series', element);

      // Maneja la respuesta del servidor, por ejemplo, redirige a otra página
      console.log('Serie creada exitosamente:', response.data);
      
      Axios.get('http://localhost:4000/api/series')
        .then((response) => {
          setListSeries(response.data);
        })
        .catch((error) => {
          console.error(error);
        });


    } catch (error) {
      // Maneja errores, por ejemplo, muestra un mensaje de error
      console.error('Error al crear la serie:', error);
    }

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
