function Numero(props){

    function subir(){
        numero++;
    }
    function bajar(){
        numero--;
    }

    var numero = props.valor;
    
    return(
        <div className="col/md/3">
            <h1>{props.valor}</h1>
            <button onClick={subir}>Incrementar</button>
            <button onClick={bajar}>Decrementar</button>
        </div>
    );
}

export default Numero;