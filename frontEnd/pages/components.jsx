import React, { useState } from "react";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Container, Media, Aut, Sharpness, Color, DropStyle} from './style/styleApp'

function Header(){
    return (
        <h1>A C C Y</h1>
    )
}

function Main(){
    return (
        <Container>
            <Media><span>50%</span></Media>
            <Aut><span>20%</span></Aut>
            <Sharpness><span>82%</span></Sharpness>
            <Color><span>23%</span></Color>
        </Container>

    )
}

function Dropz() {

  const onDrop = useCallback(acceptedFiles => {

    const upload = (file) =>{

      const fileForm = new FormData()
      fileForm.append('file', file)
      
  
        fetch('http://192.168.0.16:3001/post/up', {
          
          headers:{
            contentType: 'multipart/form-data'
          },
          method: 'POST',
          body: fileForm
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

export default Header
export {Main, Dropz}