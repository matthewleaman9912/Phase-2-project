
import { useState } from "react";

function Form({addMovie}) {
    const [title, setTitle] = useState("");
    const [release, setRelease] = useState("");
    const [characters, setCharacters] = useState("");

    function handleTitle(event) {
        setTitle(event.target.value)
    }
    
    function handleRelease(event) {
        setRelease(event.target.value)
    }

    function handleCharacters(event) {
        setCharacters(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const postObj = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title: title,
                release: release,
                characters: [characters],
                image: "https://hisgraceproductions.com/wp-content/uploads/2021/11/Pixar-Main.jpeg"
            })
        }
        fetch("http://localhost:3000/movies", postObj)
            .then(response => response.json())
            .then(data => addMovie(data))

            setRelease("");
            setCharacters("");
            setTitle("");
    }

   
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Pixar Movie!</h2>
            <label>
                Movie Title: 
            <input type="text" value={title} onChange={handleTitle}></input>
            </label>
            <br></br>
            <label>
                Movie Release Date: 
            <input type="text" value={release} onChange={handleRelease}></input>
            </label>
            <br></br>
            <label>
                Movie Main Character:
            <input type="text" value={characters} onChange={handleCharacters}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;