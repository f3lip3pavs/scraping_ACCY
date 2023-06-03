import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';

// export const Container = styled.div`
  
//   display: flex;
//   justify-content: space-around;
//   padding-left: 200px;
//   padding-right: 200px;
//   margin-top: 50px;
// `;

export const DropStyle = styled.div`

  width: 450px;
  height: 300px;
  background-color: #282c34;
  border: 2px dashed whitesmoke;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;  
  justify-content: center;
  color: white;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const CardStyled = styled.div`
  background-color: #333;
  border-radius: 30px;
  width: 300px;
  height: 400px;
  padding: 20px;

  .Progressbar{
    width: 170px;
    display: block;
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

  width: 80%;
  margin: auto;
  background-color: #333;
  /* padding: 40px; */
  border-radius: 30px;
  margin-bottom: 5%;

  .top-card{
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  h4{
    text-align: center;
    color: #1EFFB1;
    font-size: 25px;
    margin-top: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .Progressbar{
    width: 170px;
    display: block;
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

  span{
    background-color: white;
    display: block;
    width: 1px;
    margin-top: 10%;
    margin-bottom: 5%;
    margin-left: 20px;
    margin-right: 20px;
  }

  .image-test{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #454545;
    border-radius: 30px;
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
`;