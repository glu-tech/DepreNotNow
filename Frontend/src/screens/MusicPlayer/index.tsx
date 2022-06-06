import React from 'react';
import CirclePlayerMusic from '../../components/CirclePlayerMusic';
import ContainerScreen from '../../components/ContainerScreen';
import { BackgroundTypeLabel, BinauralTypeLabel, Title } from './styles';

export function MusicPlayer() {
  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[false, true, false]}>
        <Title>Player</Title>
        <CirclePlayerMusic valueMinutes='10:15'>
          <BinauralTypeLabel>Relaxar</BinauralTypeLabel>
          <BackgroundTypeLabel>Soft Rock</BackgroundTypeLabel>
        </CirclePlayerMusic>
    </ContainerScreen>
  );
}

export default MusicPlayer;