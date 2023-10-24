import { useState } from "react";

function CreateSerie (props) {
        const [title, setTitle] = useState("");
        const [released, setReleased] = useState("");
        const [genre, setGenre] = useState("");
        const [description, setDescription] = useState("");
        const [poster, setPoster] = useState("");


        function handleSubmit(e){
            e.preventDefault();
            props.fnNewSerie({
                'Title' : title,
                'Released' : released,
                'Genre' : genre,
                'Description' : description,
                'Poster' : poster

            });

            setTitle("");
            setReleased("");
            setGenre("");
            setDescription("");
            setPoster("");
        }


    return (
        <form onSubmit={(e) => handleSubmit(e)} 
        className="border border-2 border-secundary p-2 rouned" >
        <input placeholder="Title"
        className="form-control mb-2"
        type='text'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}/>


        <input placeholder="Released"
        className="form-control mb-2"
        type='text'
        value={released}
        onChange={(e) => setReleased(e.target.value)}/>

        <input placeholder="Genre"
        className="form-control mb-2"
        type='text'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}/>


        <input placeholder="Description"
        className="form-control mb-2"
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>

        <input placeholder="Poster"
        className="form-control mb-2"
        type='text'
        value={poster}
        onChange={(e) => setPoster(e.target.value)}/>

        <input type="submit" value="Create"
            className="btn btn-primary" />

    </form>
    );
}

export default CreateSerie;