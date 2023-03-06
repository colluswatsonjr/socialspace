import { useContext } from "react"
import Spaces from "../components/Spaces";
import Users from "../components/Users";
import { UserContext } from "../context/UserContext"


export default function Explore({ pages }) {

    const { user } = useContext(UserContext);

    console.log(pages)

    return (
        <>
            <h4>Profile Page: {user.username} </h4>
            <ul>
                <Users/>
                <Spaces/>
            </ul>
        </>
    )
}