import React, { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"


export default function Create() {

    const { user } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/spaces',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
                bio: bio
            })})
            .then((r)=>{
                if(r.ok){
                    r.json().then((space)=>console.log(space))
                }else{
                    r.json().then((error)=>console.log(error))
                }
            })
    };

    return (
        <>
            <h4>Create Page: {user.username} </h4>
            <form onSubmit={handleSubmit}>
            <h2>Create Space</h2>
            <label htmlFor="title">Space Title</label>
            <input type="text" id="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label htmlFor="bio">Space Bio</label>
            <input type="text" id="p" value={bio} onChange={(e) => setBio(e.target.value)} />
            <button type="submit">Create</button>
        </form>
        </>
    )
}