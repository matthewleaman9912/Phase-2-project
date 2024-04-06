import { useState } from "react";

function ShortCard({title, image, summary}) {
    const [click, setClick] = useState(false)

    function handleClick () {
        setClick((click) => !click);
    }
    return(
        <>
        <article>
            <h2>{title}</h2>
            <img src={image}></img>
            <h3>
            <button onClick={handleClick}>{click ? "Read Less About Short" : "Read About Short"} </button>
            <p>{click ? summary : ""}</p>
            </h3>
        </article>
        </>
    )
}
export default ShortCard;