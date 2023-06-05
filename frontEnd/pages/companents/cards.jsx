
import { OverallStyled, CardStyled } from '../style/styleApp.jsx'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



    let response = ['80','65','74','90']

export function Overall(props) {

    const num = props.arrayPosition;

    return (
        <OverallStyled>
            <div className='top-card'>
                <div>
                    <h4>Média</h4>
                    <CircularProgressbar className='overall-progressbar' value={response[num]} text={`${response[num]}%`} strokeWidth={15}/>
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
    
    const num = props.arrayPosition;

    return (
        <CardStyled>
            <span className='circular-bar'></span>
            <CircularProgressbar className='Progressbar' value={response[num]} text={`${response[num]}%`} strokeWidth={15}/>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </CardStyled>
    );
}