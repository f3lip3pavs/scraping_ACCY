//alterar nome do arquivo para drop.jsx

import React, { useState } from "react";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {DropStyle} from '../style/styleApp'
import {CardsContext} from "../context/cardsProvider.jsx";
import {useContext} from 'react'

function Dropz({result}) {

  //const [json, setJason] = useState({})
  let [json, setJason] = useContext(CardsContext)
  //json = {}
  const onDrop = useCallback(acceptedFiles => {

    const upload = (file) =>{

      const fileForm = new FormData()
      fileForm.append('file', file)
      
  
        fetch('http://192.168.0.16:3001/post/up', {//ACCY: http://192.168.0.16:3001
          headers:{
            contentType: 'multipart/form-data'
          },
          method: 'POST',
          body: fileForm
        }).then(res => {return res.json()}).then(jsonRes => {
          const obj = JSON.parse(jsonRes)

          setJason({
            json,
            overall: obj.overall,
            uniqueness: obj.uniqueness,
            legibility: obj.legibility,
            color: obj.color
          });

          console.log(json)

        })    

      }  

      upload(acceptedFiles[0])

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpge': ['.jpeg', '.png', '.jpg']
    }
  })

  return (
    <DropStyle {...getRootProps()} >
     
        <input {...getInputProps()}/>
        {
          isDragActive ?
            <p>Solte o arquivo aqui...</p> 
            :
            <p><strong>Arraste e solte o arquivo aqui</strong>, ou click para selecionar</p>   
        }
    </DropStyle>
  )
}

export {Dropz}