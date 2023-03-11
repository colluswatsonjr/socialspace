import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export default function Home() {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Home Page: {user.username} </h2>
        </div>
    )
}