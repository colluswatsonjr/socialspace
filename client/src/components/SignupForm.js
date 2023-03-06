import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const SignupForm = ({ switchForm }) => {
    const { login } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pw, setPw] = useState('');
    const [pwc, setPwc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // create user
        fetch('/signup',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                fname: fname,
                lname: lname,
                password: pw,
                password_confirmation: pwc,
            })})
            .then((r)=>{
                if(r.ok){
                    r.json().then((user)=>login(user))
                }else{
                    r.json().then((error)=>console.log('signup error:', error))
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="name">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="name">First name</label>
            <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
            <label htmlFor="name">Last name</label>
            <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="pw" value={pw} onChange={(e) => setPw(e.target.value)} required />
            <label htmlFor="password">Password Confirmation</label>
            <input type="password" id="pwc" value={pwc} onChange={(e) => setPwc(e.target.value)} required />
            <button type="submit">Sign Up</button>
            <p>Already have an account? <button onClick={() => switchForm()}>Sign In</button></p>
        </form>
    );
};

export default SignupForm