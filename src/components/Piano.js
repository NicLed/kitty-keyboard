import React, { useState, useEffect } from "react";
import Key from "./Key";
import styled from "styled-components";
import A from "../Anisah_Meows/A_Meow.mp3";
import Ab from "../Anisah_Meows/Ab_Meow.mp3";
import B from "../Anisah_Meows/B_Meow.mp3";
import Bb from "../Anisah_Meows/Bb_Meow.mp3";
import C from "../Anisah_Meows/C_Meow.mp3";
import D from "../Anisah_Meows/D_Meow.mp3";
import Db from "../Anisah_Meows/Db_Meow.mp3";
import E from "../Anisah_Meows/E_Meow.mp3";
import Eb from "../Anisah_Meows/Eb_Meow.mp3";
import F from "../Anisah_Meows/F_Meow.mp3";
import G from "../Anisah_Meows/G_Meow.mp3";
import Gb from "../Anisah_Meows/Gb_Meow.mp3";
import Middle_C from "../Anisah_Meows/Middle_C_Meow.mp3";
import { useKeyState } from "use-key-state";

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`;

const Piano = (props) => {
  const { ...keys } = useKeyState(
    {
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
      k: "k",
    },
    { ignoreRepeatEvents: true }
  );

  // const [activeKeys, setActiveKeys] = useState({});
  const [playingC, setPlayingC] = useState(false);
  const [playingDb, setPlayingDb] = useState(false);
  const [playingD, setPlayingD] = useState(false);
  const [playingEb, setPlayingEb] = useState(false);
  const [playingE, setPlayingE] = useState(false);
  const [playingF, setPlayingF] = useState(false);
  const [playingGb, setPlayingGb] = useState(false);
  const [playingG, setPlayingG] = useState(false);
  const [playingAb, setPlayingAb] = useState(false);
  const [playingA, setPlayingA] = useState(false);
  const [playingBb, setPlayingBb] = useState(false);
  const [playingB, setPlayingB] = useState(false);
  const [playingMiddleC, setPlayingMiddleC] = useState(false);

  // const [pressedKeys, setPressedKeys] = useState([]);
  // useEffect(() => {
    // if activeKeys has keys
      // play sound associated with those keys
    // else
      // stop

  // }, [activeKeys])

  const states = [
    playingC,
    playingDb,
    playingD,
    playingEb,
    playingE,
    playingF,
    playingGb,
    playingG,
    playingAb,
    playingA,
    playingBb,
    playingB,
    playingMiddleC,
  ];

  const stateSetters = [
    setPlayingC,
    setPlayingDb,
    setPlayingD,
    setPlayingEb,
    setPlayingE,
    setPlayingF,
    setPlayingGb,
    setPlayingG,
    setPlayingAb,
    setPlayingA,
    setPlayingBb,
    setPlayingB,
    setPlayingMiddleC,
  ];

  const Notes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
  ];

  const notes = {
    Middle_C: Middle_C,
    Db: Db,
    D: D,
    Eb: Eb,
    E: E,
    F: F,
    Gb: Gb,
    G: G,
    Ab: Ab,
    A: A,
    Bb: Bb,
    B: B,
    C: C
  };

  const noteSounds = [notes.Middle_C, notes.Db, notes.D, notes.Eb, notes.E, notes.F, notes.Gb, notes.G, notes.Ab, notes.A, notes.Bb, notes.B, notes.C];

  React.useLayoutEffect(() => {
    noteSounds.forEach((_, i) => {
      const key = Object.keys(keys)[i];
      const down = keys[key].down;
      const up = keys[key].up;
      // const pressed = keys[key].pressed;
      const audio = new Audio(noteSounds[i]);

      if (down) {
        stateSetters[i](true); // could also set to !states[i]
        audio.play();
      }

      if (up) {
        stateSetters[i](false);
      }
    });
  });

  return (
    <div>
      <KeyContainer>
        {Notes.map((note, i) => {
          const audio = new Audio(noteSounds[i]);

          const playNote = () => {
            // audio.current()
            audio.play();
          };

          const stopNote = () => {
            // audio.pause();
          };

          return (
            <Key
              note={note}
              key={i}
              play={() => playNote()}
              stop={() => stopNote()}
              playing={states[i]}
              setPlaying={stateSetters[i]}
              id={note}
            />
          );
        })}
      </KeyContainer>
    </div>
  );
};

export default Piano;
