import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';

export const HeaderStyle = styled.header`
  padding: 40px;
  display: flex;
  justify-content: space-between;

  .back{
    background-color: white;
    display: inline-block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    font-weight: 100;
  }

  .back:hover{
    background-color: #e9e9e9;
  }

  .logo{
    color: white;
    display: flex;
    height: 5vh;
    width: 300px;
  }

  h1{
    font-family: monospace;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-weight: 100;
  }

  span{
    display: block;
    width: 1px;
    background-color: white;
    margin-left: 5px;
    margin-right: 5px;
  }

`

export const DropStyle = styled.div`

  width: 1000px;
  height: 300px;
  background-color: #282c34;
  border: 2px dashed whitesmoke;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;  
  justify-content: center;
  color: white;
  display: ${props => props.hidden};

`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: auto;
`;

export const CardStyled = styled.div`
  background-color: #333;
  border-radius: 30px;
  width: 300px;
  height: 400px;
  padding: 20px;
  margin-bottom: 3%;
  display: ${props => props.onHidden == 'none'? '' : 'none'};

  .loading{
    display: ${props => props.onLoading};
    margin: auto;
    width: 100px;
    height: 100px;
    border-bottom: 3px solid #02c6f7;
    border-left: 3px solid #02c6f7;
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }

  .Progressbar{
    display: ${props => props.onLoading == 'none'? 'block' : 'none' };
    width: 170px;
    margin: auto;
  }

  .CircularProgressbar-text {
  fill: white;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  }
  .CircularProgressbar-path {
    stroke: #1EFFB1;
  }

  .CircularProgressbar-trail {
  stroke: #454545;
  
  }

  h6{
    text-align: center;
    color: #1EFFB1;
    font-size: 25px;
    margin-top: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p{
    color: white;
    font-size: 18px;
    margin-top: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const OverallStyled = styled.div`

  display: table;
  /* margin: auto; */
  width: 62%;
  background-color: #333;
  border-radius: 30px;
  margin-bottom: 2%;
  display: ${props => props.onHidden == 'none'? '' : 'none'};

  .loading{
    display: ${props => props.onLoading};
    margin: auto;
    width: 170px;
    height: 170px;
    background: none;
    border-bottom: 3px solid #02c6f7;
    border-left: 3px solid #02c6f7;
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }

  .overall-progressbar{
    display: ${props => props.onLoading == 'none'? 'block' : 'none' };
    ${props => console.log('onLoading', props.onLoading)}
    width: 170px;
    margin: auto;
  }

  .top-card{
    display: flex;
    padding: 20px;
  }

  .image-test{
    display: flex;
    width: 100%;
    background-image: url(${props => props.urlImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    border-radius: 30px;
  }

  h4{
    text-align: center;
    color: #1EFFB1;
    font-size: 25px;
    margin-top: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .CircularProgressbar-text {
  fill: white;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  }
  .CircularProgressbar-path {
    stroke: #1EFFB1;
  }

  .CircularProgressbar-trail {
  stroke: #454545;
  
  }

  span{
    background-color: white;
    display: block;
    width: 1px;
    margin-top: 10%;
    margin-bottom: 5%;
    margin-left: 20px;
    margin-right: 20px;
  }

  .bottom-card{
    background-color: #272727;
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  h6{
    margin: 0 !important;
    color: #1EFFB1;
    font-size: 25px;
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  li{
    color: white;
    font-size: 18px;
    margin-top: 5px;
    margin-left: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .spiner-container{
    position: relative;
  }

  .texto{
    display: ${props => props.onLoading};
    background: none;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 20px;
  }
`;

export const StyleRecomendation = styled.div`

  width: 34%;
  background-color: #333;
  max-height: 340px;
  border-radius: 30px;
  display: ${props => props.onHidden == 'none'? '' : 'none'};

  h6{
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 10px;
    color: #1EFFB1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  li{
    font-size: 17px;
    margin-left: 40px;
    margin-right: 30px;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export const CoverStyle = styled.div`
  
  margin-top: 40px;
  display: ${props => props.hidden};

  .container{
    box-sizing: border-box;
    overflow: hidden;
  }

  .slide-box{
    display: flex;
    justify-content: center;
    animation: slider 100s linear infinite;
    width: 90%;
    margin: auto;
  }
  
  .item img{
    width: 100px;
    padding: 50px;
  }

  @keyframes slider {
    from{transform: translateX(500px)}
    to{transform: translateX(-5000px)}
  }
`

export const HintStyle = styled.div`

  width: 80%;
  background-color: #45ff452b;
  border-left: 10px solid green;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 60px;
  display: ${props => props.hidden};

  p{
    padding: 20px;
    color: white;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`