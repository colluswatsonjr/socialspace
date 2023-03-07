import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export default function Home() {

    const { user } = useContext(UserContext);


    return (
        <>
            <h4>Home Page: {user.username} </h4>
        </>
    )
}