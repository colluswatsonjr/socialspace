import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from 'react-router';

export default function Profile() {
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    return (
            <div>
                <button onClick={()=>navigate(`/user/${user.username}/edit`)}>Edit</button>
                <div className="profile-header">
                    <h3>{user.fname + ' ' + user.lname}</h3>
                    <p>'{user.username}'</p>
                    <p>{user.bio}</p>
                </div>
                <div className="profile-content">
                    <h4>Following:</h4>
                    <h4>Subscribed:</h4>
                    <h4>Posts:</h4>
                </div>
            </div>
    )
}