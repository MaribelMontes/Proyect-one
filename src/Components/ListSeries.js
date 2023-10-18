import dataSerie from "../data/Serie";
import Serie from "./Serie";

function ListSerie(){
    let lstSeries = dataSerie.map( element =>{
        return <Serie 
        title={element.Title}
        descripcion={element.Description}
        released={element.Released}
        poster={element.Poster}
        
        />
    });

    const containerStyle = {
        marginTop: '30px', // Agregar margen superior a cada tarjeta
      };
    
    return(
        <div className="container" style={containerStyle}>
        <div className='row'>{lstSeries}
        </div>
        </div>
    );
   
}

export default ListSerie;