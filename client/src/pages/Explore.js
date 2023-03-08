import { useContext } from "react"
import Spaces from "../components/Spaces";
import Users from "../components/Users";
import { UserContext } from "../context/UserContext"


export default function Explore() {

    const { user } = useContext(UserContext);

    return (
        <>
            <h4>Explore Page: {user.username} </h4>
            <div className="grid">
                <Users />
                <Spaces />
            </div>
        </>
    )
}