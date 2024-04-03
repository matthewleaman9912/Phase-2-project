import {Link} from 'react-router-dom';



function MovieCard({title, id, image}) {
    let imgs = String(image)
    let imgsrc="{" + imgs + "}"
    console.log(imgsrc)
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