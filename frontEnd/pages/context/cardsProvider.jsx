import React, {useState, createContext} from 'react'

export const CardsContext = createContext();

export default function CardsProvider(props){

    let [json, setJason] = useState({
        overall:'',
        uniqueness:'',
        legibility:'',
        color:'',
    })
    
    return(
        <CardsContext.Provider value={[json, setJason]}> 
            {props.children}
        </CardsContext.Provider>
    )
}