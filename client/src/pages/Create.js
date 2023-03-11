import React, { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router-dom';



export default function Create() {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();


    const [title, setTitle] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/spaces', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                bio: bio
            })
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((space) => {
                        console.log(space)
                        navigate(`/space/${space.title}`);
                    })
                } else {
                    r.json().then((error) => console.log(error))
                }
            })
    };
    console.log(user)
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Space</h2>
            <label htmlFor="title">Space Title</label>
            <input type="text" id="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label htmlFor="bio">Space Bio</label>
            <input type="text" id="p" value={bio} onChange={(e) => setBio(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    )
}