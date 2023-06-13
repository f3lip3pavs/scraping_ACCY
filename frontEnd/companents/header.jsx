import { HeaderStyle } from "../style/styleApp"
import logo from '../assets/accy.png'
import {CardsContext} from "../context/cardsProvider";
import {useContext, useEffect} from 'react'


function Header(){

    let [json, setJason, droped, setDroped] = useContext(CardsContext)

    useEffect(() => {

        if(droped == ''){
            setJason({
                json,
                overall: '',
                uniqueness: '',
                legibility: '',
                color: ''
              })
        }

    }, [droped])

    return (
        <HeaderStyle>
            <div className="logo">
                <img src={logo.src} alt="" />
                <span></span>
                <h1>A C C Y</h1>
            </div>
            <div 
                className="back" 
                onClick={()=>
                    setDroped('')
                  }
            > Inserir outra imagem &gt; </div>
        </HeaderStyle>
    )
}

export default Header