import React, {useState, createContext} from 'react'

export const CardsContext = createContext();

export default function CardsProvider(props){

    let [json, setJason] = useState({
        overall:'',
        uniqueness:'',
        legibility:'',
        color:'',
        url:''
    })

    let [droped, setDroped] = useState('')    
    
    return(
        <CardsContext.Provider value={[json, setJason, droped, setDroped]}> 
            {props.children}
        </CardsContext.Provider>
    )
}