import githtml from "./words/githtml.jsx"

export default function Word({id, name, title, description}) {    
    function clickItem(target) {
        console.log(title)
    }

    
    console.log(name, title, description)

    return (
       <li id={id} onClick={e => clickItem(e.target)}>
            <a>{name}</a>
            <div className="twords-content">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: githtml }}></div>
            </div>
        </li>
    )

}