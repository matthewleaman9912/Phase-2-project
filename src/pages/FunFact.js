import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import FunFactCard from "../components/FunFactCard";

function FunFact() {
    const [facts, setFacts] = useState([]);
    const [formData, setFormData] = useState([]);

 

    const configObj = () => {
        fetch("http://localhost:3000/fun-facts", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: formData,
            }),
        })
        .then((response) => response.json())
        .then((data) => setFormData(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch("http://localhost:3000/fun-facts")
        .then(response => response.json())
        .then(data => setFacts(data))
        .catch(error => console.error(error))
    }, [])

    function handleSubmit(event) {
        configObj();
    }

    function handleChange(event) {
        setFormData(event.target.value);
    }

    const factList = facts.map((fact) => {
        return <FunFactCard key={fact.id} fun={fact.name} id={fact.id}/>
    })

    return (
        <>
        <main>
        <header>
            <NavBar />
        </header>
        <h1>Pixar Fun Facts</h1>
        <form onSubmit={handleSubmit}> 
            <h2>Provide Your Pixar Fun Fact Here!</h2>
            <input type="text" name="name" placeholder="New Fun Fact Here" onChange={handleChange} />
            <button type='submit'>Submit Fun Fact</button>
        </form>
        {factList}
        </main>
        </>
    )
}
export default FunFact;