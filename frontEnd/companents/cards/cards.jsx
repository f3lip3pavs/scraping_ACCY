
import { OverallStyled, CardStyled } from '../../style/styleApp'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CardsContext} from "../../context/cardsProvider";
import {useContext, useState, useEffect} from 'react'
import txtResult from './txtResult';

export function Overall() {

    let [json, setJason, droped, setDroped] = useContext(CardsContext)
    const [textRecomendation, setTextRecomendation] = useState([]);
    const [text, setText]  = useState('Carregando imagem...') 

    useEffect(()=>{
        if(json.overall == '' && droped == 'none'){
            if(text == 'Carregando imagem...'){
                setTimeout(()=>{
                    setText('comparando imagens...')
                }, 3000);
            };

            if(text == 'comparando imagens...'){
                setTimeout(()=>{
                    setText('comparando cores...')
                }, 3000);
            };

            if(text == 'comparando cores...'){
                setTimeout(()=>{
                    setText('comparando autenticidade...')
                }, 3000);
            };

            if(text == 'comparando autenticidade...'){
                setTimeout(()=>{
                    setText('retornando resultado...')
                }, 3000);
            };

            if(text == 'retornando resultado...'){
                setTimeout(()=>{
                    setText('Carregando imagem...')
                }, 3000);
            };
        }
    }, [droped, json])

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

    console.log('txtResult: ', txtResult)
    console.log('textRecomendation: ', textRecomendation)

    return (

        <OverallStyled 
            onHidden={ droped }
            onLoading={
                json.overall == ''? 'block' : 'none'
            }
            urlImage={json.url}
        >
            <div className='top-card'>
                    <div>
                        <h4>Média</h4>
                        <div className='spiner-container'>
                            <span className='texto'>{text}</span>
                            <span className='loading'></span>
                        </div>
                        {/* <span className='loading'></span> */}
                        <CircularProgressbar className='overall-progressbar' value={json.overall} text={`${json.overall}%`} strokeWidth={15}/>
                    </div>
                    <span>|</span>
                    <div className='image-test'></div>
                </div>
                <div className='bottom-card'>
                    <h6>Principais Pontos</h6>
                    <ul>
                        {
                            textRecomendation.map((item, index) => //nao deve conter {} apos o arrow '=>'
                                <li key={index}>{item}</li>
                            )
                        }
                        
                    </ul>
                </div>
        
        </OverallStyled>     
    );
}

export function Card(props) {

    let [json, setJason, droped, setDroped] = useContext(CardsContext)
    
    const name = props.name;//nome da propriedade

    return (
        <CardStyled 
            onHidden={ droped }
            onLoading={
                json[name] == ''? 'block' : 'none'
            }
        >
            <span className='loading'></span>
            <CircularProgressbar className='Progressbar' value={json[name]} text={`${json[name]}%`} strokeWidth={15}>
                
            </CircularProgressbar>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </CardStyled>
    );
}