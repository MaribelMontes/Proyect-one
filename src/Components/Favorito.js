function Favorito (props) {
    const handleRemoveFavorite = () => {
        
        props.onRemoveFavorite(props.value);
      };
      

    return(
        <div>
            <div className="alert alert-info p-0" role = "alert">
                <img width="50px" src={props.value.Poster} />
                <small>{props.value.Title}</small>
                <div className="ml-auto">
                <button className="btn btn-outline-primary btn-sm" onClick={handleRemoveFavorite}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Favorito;