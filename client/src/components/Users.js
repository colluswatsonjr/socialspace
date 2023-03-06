import { useEffect, useState } from "react"


export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then((r) => {
                if (r.ok) {
                    r.json().then((users) => setUsers(users))
                } else {
                    r.json().then((error) => console.log('not logged in', error))
                }
            })
    }, [])

    return (
        <>
            <h4>Users:</h4>
            <ul>
                {users.map((user) => <li key={user.username}>{user.username} : {user.bio ? user.bio : 'create bio'}</li>)}
            </ul>
        </>
    )
}