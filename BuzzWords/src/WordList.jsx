import words from "./Items.json"
import Word from "./Word.jsx"

export default function WordList() {
    //words = []

    
    
    return (
       <div className="twords-wrapper">
        <ul>
            {words.map(word => {
                return <Word key={word.id} id={word.id} title={word.title} description={word.description} />
            })}
        </ul>
      </div>
    )

}