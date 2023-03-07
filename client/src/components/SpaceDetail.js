import { useParams } from "react-router-dom";

export default function SpaceDetail(){
    const {title} = useParams();

    return(
        <>
        <h4>Space Detail: {title}</h4>
        </>
    )
}