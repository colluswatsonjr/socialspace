import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Card from "./Card";


export default function Spaces() {
    const [spaces, setSpaces] = useState([])


    useEffect(() => {
        fetch('/spaces')
            .then((r) => {
                if (r.ok) {
                    r.json().then((spaces) => setSpaces(spaces))
                } else {
                    r.json().then((error) => console.log('not logged in', error))
                }
            })
    }, [])

    return (
        <>
            {spaces.map((space) => <Link key={space.title} to={`/space/${space.title}`} state><Card page={space} /></Link>)}
        </>
    )
}