import { useParams, useLocation } from "react-router-dom";

export default function UserDetail() {
    const { username } = useParams();
    const location = useLocation();
    const user = location.state;
    console.log(user)
    function handleFollow(){
        console.log('follow')
        fetch(`/users/${user.id}/follow`, {
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({id:user.id})
        })
              .then((r) => {
        if (r.ok) {
          r.json().then((user) => console.log(user))
        // console.log('follow')
        } else {
          r.json().then((error) => console.log('not logged in', error))
        }
      })
    }
    function handleUnfollow(){
        console.log('unfollow')
        fetch(`/users/${user.id}/unfollow`, {
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({id:user.id})
        })
              .then((r) => {
        if (r.ok) {
          r.json().then((user) => console.log(user))
        // console.log('unfollow')
        } else {
          r.json().then((error) => console.log('not logged in', error))
        }
      })
    }
    return (
        <>
            <h4>User Detail: {username}</h4>
            <button onClick={handleFollow}>Follow</button>
            <button onClick={handleUnfollow}>Unfollow</button>
        </>
    )
}