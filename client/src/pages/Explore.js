import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export default function Explore({ pages }) {

    const { user } = useContext(UserContext);

    return (
        <>
            <h4>Profile Page: {user.username} </h4>
            <ul>
                {pages.map((x) => <li key={x.username}>{x.username} a.k.a {x.fname + " " + x.lname}: {x.bio ? x.bio : 'create bio'}</li>)}
            </ul>
        </>
    )
}