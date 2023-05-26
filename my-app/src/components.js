import React from "react";
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

function File() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Header
export {Main, File}