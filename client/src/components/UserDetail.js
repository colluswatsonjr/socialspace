import { useParams } from "react-router-dom";

export default function UserDetail() {
    const {username} = useParams();
    return (
        <>
            <h4>User Detail: {username}</h4>
        </>
    )
}