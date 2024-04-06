import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import ShortCard from "../components/ShortCard";


function Shorts () {
    const [short, setShort] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/shorts`)
        .then(response => response.json())
        .then((data) => {
            setShort(data)
        })
        .catch(error => console.error(error))
    }, [])

    const shortList = short.map((sho) => {
        return <ShortCard key={sho.id} title={sho.title} image={sho.image} summary={sho.summary} /> 
    })
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>Pixar Shorts List</h1>
            {shortList}
        </main>
        </>
    )
}
export default Shorts;