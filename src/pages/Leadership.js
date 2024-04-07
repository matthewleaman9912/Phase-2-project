import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import LeadershipCard from "../components/LeadershipCard";


function Leadership () {
    const [leadership, setLeadership] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/leadership")
        .then(response => response.json())
        .then(data => setLeadership(data))
        .catch(error => console.error(error))
    }, [])

    const leaders = leadership.map((leader) => {
        return <LeadershipCard key={leader.id} name={leader.name} position={leader.position} department={leader.department} image={leader.image} />
    })


    return (
        <>
        <main>
        <header>
            <NavBar />
        </header>
            <h1>Pixar Leadership</h1>
            {leaders}
        </main>
        </>
    )
}
export default Leadership;