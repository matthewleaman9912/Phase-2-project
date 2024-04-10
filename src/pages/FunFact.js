import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import FunFactCard from "../components/FunFactCard";

function FunFact() {
    
    const [funFacts, setFunFacts] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3000/fun-facts")
        .then(response => response.json())
        .then(data => setFunFacts(data))
        .catch(error => console.error(error))
    }, [])

    const factList = funFacts.map((fact) => {
        return <FunFactCard key={fact.id} fun={fact.name} id={fact.id}/>
    })

    return (
        <>
        <main>
        <header>
            <NavBar />
        </header>
        <h1>Pixar Fun Facts</h1>
        {factList}
        </main>
        </>
    )
}
export default FunFact;