import React from 'react';
import GridMenu from '../../components/GridMenu';
import GridOptionsClock from '../../components/GridOptionsClock';
import ViewSelectedOption from '../../components/ViewSelectedOption';

export function SelectionTime() {
  let binauralSelected = "Relaxar";
  let soundSelected = "Soft Rock";

  return (
      <GridMenu title='Por quanto tempo?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={binauralSelected} imgName={"binaural"} borderTop={15} borderBottom={0} />
        <ViewSelectedOption text={soundSelected} imgName={"background"} borderTop={0} borderBottom={15} />

        <GridOptionsClock />
      </GridMenu>
  );
}

export default SelectionTime;