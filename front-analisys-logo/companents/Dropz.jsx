import React from "react";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {DropStyle} from '../style/styleApp'
import {CardsContext} from "../context/cardsProvider";
import {useContext} from 'react'

function Dropz() {
  
  let [json, setJason, droped, setDroped] = useContext(CardsContext)

  const onDrop = useCallback(acceptedFiles => {

    const upload = (file) =>{

      const fr = new FileReader()
      fr.readAsDataURL(file)

      const fileForm = new FormData()
      fileForm.append('file', file)
      
      setDroped('none')
      
        fetch('https://api-logoanalysis.onrender.com/post/up', {//ACCY: http://192.168.0.16:3001  
        headers:{
            contentType: 'multipart/form-data'
          },
          method: 'POST',
          body: fileForm
        })
        .then(res => {

          return res.json()
        })
        .then(jsonRes => {
          const obj = JSON.parse(jsonRes)
          console.log('acceptedFiles: ', acceptedFiles)
          
          setJason({
            json,
            overall: obj.overall,
            uniqueness: obj.uniqueness,
            legibility: obj.legibility,
            color: obj.color,
            url: fr.result
          });

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
    <DropStyle {...getRootProps()} hidden={ droped }>
    
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