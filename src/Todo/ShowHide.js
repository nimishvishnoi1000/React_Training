import React from 'react'
import styled from 'styled-components';

const ShowHide = () => {
  const Button1 = styled.button`
    background-color: Green;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  const Button = styled.button`
  background-color: Red;
  color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `

  function hide() {
    return document.getElementById("task").innerHTML = "";
  }

  function show() {
    return document.getElementById("task").innerHTML = "Hello React !";
  }

  return (
    <div>
  <Button1 onClick={show}>
    Show Text
  </Button1>

  <Button  onClick={hide}>
    Hide Text
  </Button>

  <h4 id="task"></h4>
  
  </div>
  )
}

export default ShowHide