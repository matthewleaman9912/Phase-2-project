import {Link} from 'react-router-dom';



function MovieCard({title, id, image}) {
    return(
        <>
        <article>
            <h2>{title}</h2>
            <img src={image}></img>
            <p>
                <Link to={`/movies/${id}`}>View Movie</Link>
            </p>
        </article>
        </>
    );
}

export default MovieCard;