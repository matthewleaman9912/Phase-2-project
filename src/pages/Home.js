import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error))
    }, [])

    const movieList = movies.map((film) => {
        return <MovieCard key={film.id} title={film.title} id={film.id} image={film.image} />
    })
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>Pixar Movies</h1>
            {movieList}
        </main>
        </>
    )
}
export default Home;