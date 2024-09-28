import { useState } from 'react'

export default function GetLucky({setCurrentItem, wordLength}) {
    const [currentRoll, setCurrentRoll] = useState(0);
    
    
    function rollItem() {
        const itemId = Math.floor(Math.random() * wordLength);
        //const itemId = 2;
        setCurrentItem(itemId)
        // setCurrentItem(0)
        // setCurrentRoll(0)
    }

    return (
        <>
            <a className="start-roll-button" onClick={e => rollItem()}><img src="images/dice.svg" /></a>
        </>
    )


}