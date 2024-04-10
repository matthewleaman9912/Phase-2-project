import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Form from "../components/Form";

function Home () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error))
    }, [])

    function addMovie(newMovie) {
        const newMovieArray = [...movies, newMovie];
        setMovies(newMovieArray)
    }

    const movieList = movies.map((film) => {
        return <MovieCard key={film.id} title={film.title} id={film.id} image={film.image} />
    })
console.log(movies)
    return (
        <main>
            <header>
                <NavBar />
            </header>
                <Form addMovie = {addMovie} />
            <h1>Pixar Movies Home Page</h1>
            {movieList}
        </main>
        
    )
}
export default Home;