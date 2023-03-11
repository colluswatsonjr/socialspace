import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext";



export default function UserProfile({ userInfo }) {
    const { user } = useContext(UserContext);
    const [isFollowing, setIsFollowing] = useState(false);
    useEffect(() => {
        const isFollowingUser = user.followees.includes(userInfo);
        setIsFollowing(isFollowingUser);
      }, [user, userInfo]);

      
    function handleFollow() {
        setIsFollowing(true)
        fetch(`/users/${userInfo.id}/follow`, {
            method: 'POST',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: user.id })
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => console.log(user))
                } else {
                    r.json().then((error) => console.log('not logged in', error))
                }
            })
    }
    function handleUnfollow() {
        setIsFollowing(false)
        fetch(`/users/${userInfo.id}/unfollow`, {
            method: 'POST',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: user.id })
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => console.log(user))

                } else {
                    r.json().then((error) => console.log('not logged in', error))
                }
            })
    }

    return (
        <div>
            <h3>User Page: {userInfo.username}</h3>
            {!isFollowing?<button onClick={()=>handleFollow()}>Follow</button>:<button onClick={()=>handleUnfollow()}>Unfollow</button>}
        </div>
    )
}