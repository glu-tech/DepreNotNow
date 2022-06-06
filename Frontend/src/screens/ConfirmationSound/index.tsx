import React from 'react';
import Submit from '../../components/Button';
import GridMenu from '../../components/GridMenu';
import ViewSelectedOption from '../../components/ViewSelectedOption';
import { CancelButton, CancelLabel } from './styles';

export function ConfirmationSound() {
  let binauralSelected = "Relaxar";
  let soundSelected = "Soft Rock";
  let timeSelected = "30";

  async function handleConfirmation(){
    return;
  }

  return (
      <GridMenu title='Está tudo certo?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={binauralSelected} imgName={"binaural"} borderTop={15} borderBottom={0} />
        <ViewSelectedOption text={soundSelected} imgName={"background"} borderTop={0} borderBottom={0} />
        <ViewSelectedOption text={`${timeSelected} minutos`} imgName={"time"} borderTop={0} borderBottom={15} opacity={0.5} />
        <Submit label={"Vamos lá"} onPress={handleConfirmation} style={{ left: 35, top: 60 }} />
        <CancelButton>
            <CancelLabel>Cancelar</CancelLabel>
        </CancelButton>
      </GridMenu>
  );
}

export default ConfirmationSound;