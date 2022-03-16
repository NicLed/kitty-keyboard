import React from 'react';
import styled from 'styled-components';


const WhiteKey = styled.div`
  background-color: ivory;
  height: 300px;
  width: 60px;
  border: 1px solid black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  :active {
    background-color: grey;
  }
  ${({ playing }) => playing && `background: grey;`}
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
  :active {
    background-color: grey;
  }
  ${({ playing }) => playing && `background: grey;`}
`

const KeyText = styled.div`
  position: relative;
  color: black;
  font-weigth: 600;
  font-size: 36px;
  margin-top: 240px;
  pointer-events: none;
`

const Key = ({ note, play, stop, playing, setPlaying }) => {

  return (
    <div>
      {note.includes('b') ?
        <BlackKey onMouseDown={play} onMouseUp={stop} playing={playing} ></BlackKey>
        : <WhiteKey onMouseDown={play} onMouseUp={stop} playing={playing} >
          <KeyText>{note}</KeyText>
        </WhiteKey>}
    </div>
  )
}

export default Key;