import { useState } from 'react'
import words from "./Items.json"
import Word from "./Word.jsx"


export default function WordList() {
    //words = []
    const [isItemActive, setIsItemActive] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    

    function itemActive() {
        console.log('wjiajsdiajsd')
        setIsItemActive(true)
    }

    function unselectAll() {
        setCurrentItem(0)
    }
    
    return (
        <>
            <div className="twords-wrapper">
            <ul>
                {words.map(word => {
                    return <Word key={word.id} id={word.id} name={word.name} title={word.title} description={word.description} setCurrentItem={setCurrentItem} currentItem={currentItem} />
                })}
            </ul>
            </div>
            <div className={currentItem > 0 ? 'twords-backdrop show' : 'twords-backdrop'} onClick={unselectAll}>{currentItem}</div>
        </>
    )


}