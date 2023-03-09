import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export default function Profile() {
    const { user } = useContext(UserContext);

    return (
        <>
            <h4>Profile Page: {user.username} </h4>
            <div className="profile-page">
                <div className="profile-header">
                    <h1>{user.fname + ' ' + user.lname}</h1>
                    <p>'{user.username}'</p>
                    <p>{user.bio}</p>
                </div>
                <div className="profile-content">
                    <h2>Following:</h2>
                    <ul>
                        {user.followees.map((x)=><li>{x.username}</li>)}
                    </ul>
                    <h2>Subscribed:</h2>
                    <h2>Posts:</h2>
                </div>
            </div>
        </>
    )
}