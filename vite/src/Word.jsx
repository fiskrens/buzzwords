import { useState } from 'react'

export default function Word({id, name, title, description, currentItem, setCurrentItem}) {    
    const [isActive, setActive] = useState(false);

    function clickItem(target) {
        const closest = target.closest('.twords-content')
        if(!closest) {
            setActive(!isActive);
            setCurrentItem(id)
        }
    }


    return (
       <li id={id} onClick={e => clickItem(e.target, id)} className={currentItem === id ? "show" : ""}>
            <a>{name}</a>
            <div className="twords-content">
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </li>
    )

}