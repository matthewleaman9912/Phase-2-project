

function LeadershipCard({name, image, position, department}) {
    return(
        <>
            <article>
                <h2>{name}</h2>
                <img src={image}></img>
                <h3>{position}</h3>
                <h3>{department}</h3>
            </article>
        </>
    )
}
export default LeadershipCard;