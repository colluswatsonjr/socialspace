import { useParams, useLocation } from "react-router-dom";

export default function UserDetail() {
    const { username } = useParams();
    const location = useLocation();
    const user = location.state;
    console.log(user)
    return (
        <>
            <h4>User Detail: {username}</h4>
        </>
    )
}