
import { OverallStyled, CardStyled } from '../../style/styleApp'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CardsContext} from "../../context/cardsProvider";
import {useContext, useState, useEffect} from 'react'
import txtResult from './txtResult';

export function Overall() {

    let [json, setJason, droped, setDroped] = useContext(CardsContext)
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

    let metrics = []
    let corPercent = 70
    let uniquenessPercent = 90
    let legibilityPercent = 70

    if(json.color < corPercent){
        metrics[0] = `Seu nível de cor esta abaixo da média de ${corPercent}% do marcado`
        console.log('color: ', metrics[0])

    }else{
        metrics[0] = `Seu nível de cor esta acima da média de ${corPercent}% do marcado`
        console.log('color: ', metrics[0])

    }if(json.uniqueness < uniquenessPercent){
        metrics[1] = `Seu nível de autenticidade está abaixo da média de ${uniquenessPercent}% do marcado`
        console.log('uniquenessPercent: ', metrics[1])

    }else{
        metrics[1] = `Seu nível de autenticidade está acima da média de ${uniquenessPercent}% do marcado`
        console.log('uniquenessPercent: ', metrics[1])

    }
    
    if(json.legibility < legibilityPercent){
        metrics[2] = `Seu nível de legibilidade está abaixo da média de ${legibilityPercent}% do marcado`
        console.log('legibility: ', metrics[2])

    }else{
        metrics[2] = `Seu nível de legibilidade está acima da média de ${legibilityPercent}% do marcado`
        console.log('legibility: ', metrics[2])
    }
  

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

                        <CircularProgressbar className='overall-progressbar' value={json.overall} text={`${json.overall}%`} strokeWidth={15}/>
                    </div>
                    <span>|</span>
                    <div className='image-test'></div>
                </div>
                <div className='bottom-card'>
                    <h6>Principais Pontos</h6>
                    <ul>
                        {
                            json.overall != ''?
                            <>
                            <li>{metrics[0]}</li>
                            <li>{metrics[1]}</li>
                            <li>{metrics[2]}</li>
                            </>
                            :
                            <>
                            <li></li>
                            <li></li>
                            <li></li>
                            </>
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