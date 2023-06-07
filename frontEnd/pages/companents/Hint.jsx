import React from "react";
import {HintStyle} from '../style/styleApp'
import {useEffect} from 'react'

export default function Hint(props) {

    useEffect(()=>{
        console.log('hidden from hint: ', props.hidden)
    })

    return(
        <HintStyle>
            <p>Arraste a sua logo no campo ou clique para selecionar</p>
        </HintStyle>
    )

}
