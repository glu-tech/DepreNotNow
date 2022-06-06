import React from 'react';
import GridMenu from '../../components/GridMenu';
import { CardStyleSound } from '../../components/CardStyleSound';
import ViewSelectedOption from '../../components/ViewSelectedOption';

export function SelectionMusic() {
  let binauralSelected = "Relaxar";

  return (
      <GridMenu title='Qual estilo vamos escutar?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={binauralSelected} imgName={"binaural"} borderTop={16} borderBottom={16} />

        <CardStyleSound head='LoFi' topLocate={35} imgName='lofi' />
        <CardStyleSound head='Soft Rock' topLocate={60} imgName='softRock' />
        <CardStyleSound head='Indie' topLocate={85} imgName='indie' />
      </GridMenu>
  );
}

export default SelectionMusic;