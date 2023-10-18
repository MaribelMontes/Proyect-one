function Navegacion(){
    return (
        <ul class="nav justify-content-end">
       <nav className="navbar navbar-light bg-transparent">
      <form className="form-inline">
        <div className="input-group"> 
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit">Search</button>
          </div>
        </div>
      </form>
    </nav>
  
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Series</a>
        </li>
              
      </ul>
    );
}

export default Navegacion;