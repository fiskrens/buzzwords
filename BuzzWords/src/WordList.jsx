import { useState } from 'react'
import words from "./dataitems.json"
import Word from "./Word.jsx"
import GetLucky from "./GetLucky.jsx"


export default function WordList() {
    //words = []
    const [isItemActive, setIsItemActive] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    const [currentRoll, setCurrentRoll] = useState(0);

    function rollItem() {
        const itemId = Math.floor(Math.random() * words.length);
        setCurrentItem(itemId)
    }

    function itemActive() {
        setIsItemActive(true)
    }

    function unselectAll() {
        setCurrentItem(0)
        setCurrentRoll(0)
    }
    
    return (
        <>
            <GetLucky />
            <div className="twords-wrapper">
            <ul>
                {words.map(word => {
                    return <Word key={word.id} id={word.id} name={word.name} title={word.title} description={word.description} setCurrentItem={setCurrentItem} currentItem={currentItem} />
                })}
            </ul>
            </div>
            <div className={currentItem > 0 ? 'twords-backdrop show' : 'twords-backdrop'} onClick={unselectAll}></div>
        </>
    )


}