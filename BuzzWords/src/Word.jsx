

export default function Word({id, title, description}) {    
    function clickItem(target) {
        console.log(target)
    }
    
    return (
       <li onClick={e => clickItem(e.target)}>
            <a>{title}</a>
            <div className="twords-content" dangerouslySetInnerHTML={{ __html: description }} />
        </li>
    )

}