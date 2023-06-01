// import React, { useState } from "react";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {DropStyle} from '../style/styleApp'

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
        }).then(res => {console.log(res)})    

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