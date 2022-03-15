import React from "react";
import Key from "./Key";
import styled from "styled-components";

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`;

const Piano = (props) => {
  const Notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  return (
    <div>
      <KeyContainer>
        {Notes.map((note, i) => {
          return (<Key note={note} key={i} />)
        })}
      </KeyContainer>
    </div>
  );
};

export default Piano;
