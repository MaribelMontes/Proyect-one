import { useState } from "react";

function Serie (props){

    const cardImgStyle = {
        width: '100%',     // Ajusta el ancho al 100% del contenedor
        height: 'auto',    // Mantiene la proporción original
      };
    
      const cardStyle = {
        height: '95%',    // Establece una altura fija para las tarjetas
      };
    const [verMas, setverMas] =useState(false);
    let sectionverMas =  <button 
                            onClick={() => setverMas(true)}
                            class="btn btn-outline-dark btn-sm">See more</button>
    
    if (verMas)  {
        sectionverMas = <div>
            <button 
            type="button"
            onClick={() => setverMas(false)}
            className="btn-close float-end"
            aria-label="close" />
            <hr/>
            {props.value.Description}
        </div>
    } 
    
    return(
        <div className="col-md-3">
            <div className="card mb-3" style={cardStyle} >
            
                <img src={props.value.Poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-titulo">{props.value.Title}</h5>
                    <p className="card-text"><small className="text-muted">{props.value.Genre}</small></p>
                    <p className="card-text">{props.value.Description.substring(0, 30)}</p>
                    <p className="card-text"><small className="text-muted">{props.value.Released}</small></p>
                   {sectionverMas}

                   <button 
                            onClick={() => props.fnAddFavorites(props.value)}
                            className="btn btn-outline-warning btn-sm">Favorite</button>
                </div>

            </div>

        </div>

    );
}

export default Serie;