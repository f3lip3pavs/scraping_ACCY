import React, { useState } from "react";
import './App.css';
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Header(){
    return (
        <h1>A C C Y</h1>
    )
}

function Main(){
    return (

        <div class="container">
            <div id="media" class="metric"><span>50%</span></div>
            <div id="aut" class="metric"><span>20%</span></div>
            <div id="clareza" class="metric"><span>82%</span></div>
            <div id="cor" class="metric"><span>23%</span></div>
        </div>

    )
}

function Dropz() {

  
  const [file, setFile] = useState(null)
  

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0])
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpge': ['.jpeg', '.png']
    }
  })

  if (file) return null

  return (
    <div id="dropZone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Solte o arquivo aqui...</p> 
          :
          <p><strong>Arraste e solte o arquivo aqui</strong>, ou click para selecionar</p>   
      }
    </div>
  )
}

export default Header
export {Main, Dropz}