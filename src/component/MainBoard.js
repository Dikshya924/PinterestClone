import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './MainBoard.css'
function MainBoard(props) {
    let {pins}=props;
    return (
        <Wrapper>
            <Container className="mainboard__container">
                {pins.map((pin, index)=>{
                    let {urls}=pin;
                    return <Pin urls={urls} key={index}/>
                })}
                
            </Container>
        </Wrapper>
    )
}

export default MainBoard
const Wrapper =styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top:15px;
    justify-content:center;
    display:flex;
  
 
    
    
`
const Container =styled.div`
    
    
    height:100%;
    column-gap: 5px;
    margin: 0 auto;
    background-color: white;
   
`

