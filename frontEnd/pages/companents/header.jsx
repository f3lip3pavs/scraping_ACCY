import { HeaderStyle } from "../style/styleApp"
import logo from '../assets/accy.png'


function Header(props){

    return (
        <HeaderStyle>
            <div className="logo">
                <img src={logo.src} alt="" />
                <span></span>
                <h1>A C C Y</h1>
            </div>
        </HeaderStyle>
    )
}

export default Header