import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router';



export default function EditUser(){
    const { user, logout } = useContext(UserContext);
    let navigate = useNavigate();


    const [username, setUsername] = useState(user.username);
    const [fname, setFname] = useState(user.fname);
    const [lname, setLname] = useState(user.lname);
    const [bio, setBio] = useState(user.bio? user.bio:'');

    const handleSubmit = (event) => {
        event.preventDefault();
        // create user
        console.log({
            username: username,
            fname: fname,
            lname: lname,
            bio: bio
        })
        fetch('/edit',{
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                fname: fname,
                lname: lname,
                bio: bio
            })})
            .then((r)=>{
                if(r.ok){
                    r.json().then((user)=>navigate(`/user/${user.username}`))
                }else{
                    r.json().then((error)=>console.log('edit error:', error))
                }
            });
    };
    
    function handleDelete() {
        fetch(`/delete`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                logout(null);
            }else{
                console.log('delete error:')
            }
        });
    }

    return (
        <form>
            <h2>Edit Account</h2>
            <label htmlFor="name">Username</label>
            <input type="text" id="username" placeholder={user.username} value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="name">First name</label>
            <input type="text" id="fname" placeholder={user.fname} value={fname} onChange={(e) => setFname(e.target.value)} />
            <label htmlFor="name">Last name</label>
            <input type="text" id="lname" placeholder={user.lname} value={lname} onChange={(e) => setLname(e.target.value)} />
            <label htmlFor="bio">Bio</label>
            <input type="text" id="bio" placeholder={user.bio} value={bio} onChange={(e) => setBio(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Edit Account</button>
            <button type="submit" onClick={handleDelete}>Delete Account</button>
            {/* <p>Already have an account? <button onClick={() => switchForm()}>Sign In</button></p> */}
        </form>
    );
}