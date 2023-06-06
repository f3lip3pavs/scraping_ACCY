
import { OverallStyled, CardStyled } from '../style/styleApp.jsx'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CardsContext} from "../context/cardsProvider.jsx";
import {useContext} from 'react'

export function Overall(props) {

    let [json, setJason] = useContext(CardsContext)

    return (
        <OverallStyled>

            <div className='top-card'>
                    <div>
                        <h4>Média</h4>
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

    let [json, setJason] = useContext(CardsContext)
    
    const name = props.name;

    return (
        <CardStyled>
            <span className='circular-bar'></span>
            <CircularProgressbar className='Progressbar' value={json[name]} text={`${json[name]}%`} strokeWidth={15}/>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </CardStyled>
    );
}