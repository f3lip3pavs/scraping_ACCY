
import { OverallStyled, CardStyled } from '../style/styleApp.jsx'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CardsContext} from "../context/cardsProvider.jsx";
import {useContext, useState, useEffect} from 'react'

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

    


    return (
        <OverallStyled 
            onHidden={ droped }
            onLoading={
                json.overall == ''? 'block' : 'none'
            }
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
                    <div className='image-test'>img</div>
                </div>
                <div className='bottom-card'>
                    <h6>Principais Pontos</h6>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</li>
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