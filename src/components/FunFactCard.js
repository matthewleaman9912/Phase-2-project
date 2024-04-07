

function FunFactCard({id, fun}) {
    return(
        <>
        <article>
            <h2>Fun Fact #{id}</h2>
            <p>{fun}</p>
        </article>
        </>
    )
}
export default FunFactCard;