import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
    const [movie, setMovie] = useState([]);
    const [characters, setCharacters] = useState([]);
    const params = useParams();
    const movieID = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${movieID}`)
        .then(response => response.json())
        .then((data) => {
            setMovie(data)
            setCharacters(data.characters)
        })
        .catch(error => console.error(error))
    }, [movieID])
    

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <article>
                    <img src={movie.image}></img>
                    <h1>{movie.title}</h1>
                    <p>Release Date: {movie.release}</p>
                    <h3>Movie Characters</h3>
                    <p>{characters[0]}, {characters[1]}, {characters[2]}</p>
                </article>
            </main>
        </>
    )
}
export default Movie;