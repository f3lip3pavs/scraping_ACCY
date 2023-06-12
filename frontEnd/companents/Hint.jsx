import React from "react";
import {HintStyle} from '../style/styleApp'
import {useEffect} from 'react'
import {CardsContext} from "../context/cardsProvider";
import {useContext} from 'react'

export default function Hint() {

    let [json, setJason, droped, setDroped] = useContext(CardsContext)

    

    useEffect(()=>{
        console.log('hidden from hint: ', droped)
    }, [droped])

    return(
        <HintStyle>
            <p hidden={ droped }>Arraste a sua logo no campo ou clique para selecionar</p>
        </HintStyle>
    )

}
