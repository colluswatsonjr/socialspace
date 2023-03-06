import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const LoginForm = ({ switchForm }) => {
    const { login } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/login',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: pw
            })})
            .then((r)=>{
                if(r.ok){
                    r.json().then((user)=>login(user))
                }else{
                    r.json().then((error)=>console.log(error))
                }
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <label htmlFor="username">Username</label>
            <input type="text" id="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="p" value={pw} onChange={(e) => setPw(e.target.value)} required />
            <button type="submit">Sign In</button>
            <p>Don't have an account? <button onClick={() => switchForm()}>Sign Up</button></p>
        </form>
    );
};

export default LoginForm