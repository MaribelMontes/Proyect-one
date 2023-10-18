function Serie (props){

    const cardImgStyle = {
        width: '100%',     // Ajusta el ancho al 100% del contenedor
        height: 'auto',    // Mantiene la proporción original
      };
    
      const cardStyle = {
        height: '95%',    // Establece una altura fija para las tarjetas
      };

    return(
        <div className="col-md-3">
            <div className="card mb-3" style={cardStyle} >
            
                <img src={props.poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-titulo">{props.title}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text"><small className="text-muted">{props.released}</small></p>

                </div>

            </div>

        </div>

    );
}

export default Serie;