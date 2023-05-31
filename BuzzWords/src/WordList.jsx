import words from "./Items.json"
import Word from "./Word.jsx"

import Git from "./words/Git.jsx"

import ui from "./words/UI.jsx"

export default function WordList() {
    //words = []

    console.log(Git.title)
    console.log(ui.title)
    const words2 = [Git]

    const words3 = [{name: 'git', title: 'Git'}]

    
    return (
       <div className="twords-wrapper">
        <ul>
            {words3.map(word => {
                return <Word name={word.name} title={word.title} description={word.description} />
            })}
        </ul>
      </div>
    )


}