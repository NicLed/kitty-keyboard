import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useKeyState } from 'use-key-state';


const WhiteKey = styled.div`
  background-color: ivory;
  height: 300px;
  width: 60px;
  border: 1px solid black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`

const BlackKey = styled.div`
  background-color: black;
  height: 225px;
  width: 36px;
  cursor: pointer;
  position: relative;
  margin-left: -18px;
  margin-right:-18px;
  z-index: 2;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`

const KeyText = styled.div`
  position: relative;
  color: black;
  font-weigth: 600;
  font-size: 36px;
  margin-top: 240px;
  pointer-events: none;
`

const Key = ({ note, play, playing, setPlaying }) => {
  // const [aPressed, setAPressed] = useState('up');


  // useKeyState.on('a', down => {
  //   setAPressed('down', () => {
  //     if ('down') {

  //     } else {

  //     }
  //   })
  // })

  const handleClick = (event) => {
    play()
  }

  return (
    <div>
      {note.includes('b') ?
        <BlackKey onClick={handleClick} ></BlackKey>
        : <WhiteKey onClick={handleClick} >
          <KeyText>{note}</KeyText>
        </WhiteKey>}
    </div>
  )
}

export default Key;