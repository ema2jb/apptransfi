import React, {useState} from 'react'
import Personal from './personal'
import General from './general'


const Settings =()=>{
    const [view, setView] = useState(true)

    const changeView = ()=>{
        setView(!view)
    }
    if(view === true){
        return(  
            <General changeView={changeView} />
        )
    } else {
        return(
            <Personal changeView={changeView} />
        )
    }
}

export default Settings