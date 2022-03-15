import React, {useState, useEffect} from "react";
import Key from "./Key";
import styled from "styled-components";
import A from '../Anisah_Meows/A_Meow.mp3';
import Ab from '../Anisah_Meows/Ab_Meow.mp3';
import B from '../Anisah_Meows/B_Meow.mp3';
import Bb from '../Anisah_Meows/Bb_Meow.mp3';
import C from '../Anisah_Meows/C_Meow.mp3';
import D from '../Anisah_Meows/D_Meow.mp3';
import Db from '../Anisah_Meows/Db_Meow.mp3';
import E from '../Anisah_Meows/E_Meow.mp3';
import Eb from '../Anisah_Meows/Eb_Meow.mp3';
import F from '../Anisah_Meows/F_Meow.mp3';
import G from '../Anisah_Meows/G_Meow.mp3';
import Gb from '../Anisah_Meows/Gb_Meow.mp3';
import Middle_C from '../Anisah_Meows/Middle_C_Meow.mp3';
import { useKeyState } from 'use-key-state';

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`;

const Piano = (props) => {
  const { ...keys } = useKeyState({
    a: "a",
    w: "w",
    s: "s",
    e: "e",
    d: "d",
    f: "f",
    t: "t",
    g: "g",
    y: "y",
    h: "h",
    u: "u",
    j: "j",
    k: "k"
  }, { ignoreRepeatEvents: false});

  const [playing, setPlaying] = useState(false);
  const Notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C']
  const noteSounds = [Middle_C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B, C]

  React.useLayoutEffect(() => {
    noteSounds.forEach((_, i) => {
      const key = Object.keys(keys)[i];
      const down = keys[key].down;
      // const pressed = keys[key].pressed;
      const audio = new Audio(noteSounds[i])

      if (down) {
        audio.play()
      }
    })
  })

  return (
    <div>
      <KeyContainer>
        {Notes.map((note, i) => {
          const audio = new Audio(noteSounds[i]);

          const playNote = () => {
            // audio.current()
            audio.play();
          }

          return (<Key note={note} key={i} play={() => playNote()} playing={playing} setPlaying={setPlaying} />)
        })}
      </KeyContainer>
    </div>
  );
};

export default Piano;
