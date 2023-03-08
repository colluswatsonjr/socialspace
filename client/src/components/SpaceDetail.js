import { useParams, useLocation } from "react-router-dom";

export default function SpaceDetail() {
    const { title } = useParams();
    const location = useLocation();
    const space = location.state;
    console.log(space)
    return (
        <>
            <h4>Space Detail: {title}</h4>
        </>
    )
}