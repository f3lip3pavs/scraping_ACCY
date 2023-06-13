import {StyleRecomendation} from '../../style/styleApp'
import txtResult from './txtResult';
import {CardsContext} from "../../context/cardsProvider";
import {useContext, useState, useEffect} from 'react'

export default function Recomendation(pros){

    let [json, setJason, droped, setDroped] = useContext(CardsContext)
    const [textRecomendation, setTextRecomendation] = useState([]);

    useEffect(()=>{
        if(json.overall >= 90){
            setTextRecomendation(txtResult[90])
        }else if(json.overall >= 80 && json.overall <= 89){
            setTextRecomendation(txtResult[80])
        }else if(json.overall >= 70 && json.overall <= 79){
            setTextRecomendation(txtResult[70])
        }else if(json.overall >= 50 && json.overall <= 69){
            setTextRecomendation(txtResult[50])
        }else if(json.overall == 0){
            setTextRecomendation([])
        }else{
            setTextRecomendation(txtResult[0])
        }
    }, [json])
    
    
    return (
    <StyleRecomendation onHidden={ droped }>

        <h6>{pros.title}</h6>
        <ul>
            {
                textRecomendation.map((item, index) => //nao deve conter {} apos o arrow '=>'
                    <li key={index}>{item}</li>
                )
            }
        </ul>
    </StyleRecomendation>
    )

}