import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Card from "./Card";


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
            {users.map((user) => <Link key={user.username} to={`/user/${user.username}`} state><Card page={user} /></Link>)}
        </>
    )
}