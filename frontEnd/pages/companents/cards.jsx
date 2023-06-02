
import { OverallStyled, CardStyled } from '../style/styleApp.jsx'

    let response = ['80','65','74','90']

export function Overall() {


    return (
        <OverallStyled />     

    );
}

export function Card(props) {
    
    const n = props.arrayPosition;

    // if(response[n] != '80'){
    //     console.log('=====>', response[n])
    // }


    return (
        <CardStyled lenghtBar={response[n]}>
            <span className='circular-bar'></span>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </CardStyled>
    );
}

// export default Overall
// export { Card }