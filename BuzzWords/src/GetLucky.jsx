import { useState } from 'react'

export default function GetLucky() {
    const [currentRoll, setCurrentRoll] = useState(0);
    
    return (
        <>
            <a className="start-roll-button" onClick={e => rollItem(e.target)}>Start Roll</a>
        </>
    )


}