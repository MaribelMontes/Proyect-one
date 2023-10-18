
import Serie from "./Serie";

function ListSerie(props){
    let listSeriesRendered = props.elements.map( element =>{
        return <Serie 
                key = {element.Id}
                value = {element}
                fnAddFavorites = {props.fnAddFavorites}
        />
    });

    const containerStyle = {
        marginTop: '30px', // Agregar margen superior a cada tarjeta
      };
    
    return(
        <div className="container" style={containerStyle}>
        <div className='row'>{listSeriesRendered}
        </div>
        </div>
    );
   
}

export default ListSerie;