import { useEffect, useState } from "react"


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
            <h4>Spaces:</h4>
            <ul>
                {spaces.map((space) => <li key={space.title}>{space.title} : {space.bio ? space.bio : 'create bio'}</li>)}
            </ul>
        </>
    )
}