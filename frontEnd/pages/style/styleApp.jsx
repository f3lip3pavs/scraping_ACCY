import styled, {css} from "styled-components"

export const Container = styled.div`
  
  display: flex;
  justify-content: space-around;
  padding-left: 200px;
  padding-right: 200px;
  margin-top: 50px;
`;

// export const Media = styled.div`
  
//   width: 150px;
//   height: 150px;
//   border: 10px solid #404040;
//   border-right: 10px solid #1effb1;
//   border-top: 10px solid #1effb1;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

// export const Aut = styled.div`
  
//   width: 100px;
//   height: 100px;
//   border: 10px solid whitesmoke;
//   border-bottom: 10px solid #1effb1;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

// export const Sharpness = styled.div`
  
//   width: 100px;
//   height: 100px;
//   border: 10px solid whitesmoke;
//   border-left: 10px solid #1effb1;
//   border-right: 10px solid #1effb1;
//   border-top: 10px solid #1effb1;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

// export const Color = styled.div`
  
//   width: 100px;
//   height: 100px;
//   border: 10px solid whitesmoke;
//   border-right: 10px solid #1effb1;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
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
function circularBar(n){

  // let style = ''
  // let porcent =''

  let style = ''

  for(let i=0; i<n+1; i++){
    let deg = 90 + (3.6 * n)
    //return `${deg}deg`

    if(n < 51){

      style = `
      
      background: linear-gradient(
        to right, 
        #1EFFB1 50%, 
        transparent 50%,
        transparent
        ),
        linear-gradient( 
        ${deg}deg,
        #1EFFB1 50%, 
        #454545 50%
        )
      `
      }else{

      style = `
      
      background: linear-gradient(
        to left, 
        #1EFFB1 50%, 
        transparent 50%,
        transparent
        ),
        linear-gradient( 
        ${deg}deg,
        #1EFFB1 50%, 
        #454545 50%
        )
      `
    }

    // style.porcent = `

    //   .circular-bar::before{
    //     content: '60';
    //     display: inline-flex;
    //     justify-content: center;
    //     align-items: center;
    //     height: 100%;
    //     width: 100%;
    //     font-size: 60px;
    //     background-color: #333;
    //     transform: scale(0.7);
    //     border-radius: 50%;
    //     font-family: monospace;
    //     color: white
    //   }
    // `
   }
  // console.log(style)
  // return (style)
  return style
}

export const CardStyled = styled.div`
  background-color: #333;
  border-radius: 30px;
  width: 300px;
  height: 400px;
  /* size: ${(props) => props.lenghtBar}; */
  padding: 20px;

  .circular-bar{
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: auto;
    

    ${circularBar(49)}
  }

  .circular-bar::before{
    content: '80%';
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 60px;
    background-color: #333;
    transform: scale(0.7);
    border-radius: 50%;
    font-family: monospace;
    color: white
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

`;