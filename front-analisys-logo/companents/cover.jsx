import React from "react";
import {CardsContext} from "../context/cardsProvider";
import {useContext} from 'react'
import {CoverStyle} from '../style/styleApp'

import img1 from '../assets/airbnb.png'
import img2 from '../assets/dell.png'
import img3 from '../assets/google.png'
import img4 from '../assets/intel.png'
import img5 from '../assets/logotipo-da-apple.png'
import img6 from '../assets/mcdonalds.png'
import img7 from '../assets/netflix.png'
import img8 from '../assets/pepsi.png'
import img9 from '../assets/samsung.png'
import img10 from '../assets/starbucks.png'

 const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export default function Cover() {

    let [json, setJason, droped, setDroped] = useContext(CardsContext)

    let imgs = ['']
    function loopSlider(){

        for(let i = 0; i < 10; i++){

            
                imgs.push(...images)
            

            // console.log(imgs)
        }           
        
    }

    loopSlider()

    return(
        <CoverStyle hidden={ droped }>

            <div className="container">
                <div className="slide-box" drag='x'>
                    {
                    imgs.map( (image, index) =>(
                        <div className="item" key={index}>
                            <img src={image.src} alt="alt" />
                        </div>
                        ))
                    }
                </div>
            </div>

        </CoverStyle>
    )
}