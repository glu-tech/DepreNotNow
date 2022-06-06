import React from 'react';
import { ContainerSelectionSounds } from './styles';
import ContainerScreen from '../../components/ContainerScreen';
import { LinearGradient } from 'expo-linear-gradient';
import TitleLabel from '../../components/TitleLabel';

export function GridMenu(props:{ title:string, children:any, visibleMenuBar:boolean, optionMenuSelected:boolean[]}) {
  return (
    <ContainerScreen visibleMenuBar={props.visibleMenuBar} optionMenuSelected={props.optionMenuSelected}>
      <TitleLabel text={props.title} />

      <LinearGradient colors={['#0c514918', '#0a1422c8']} style={{ borderRadius: 16, width: 240, height: 120, left: 72, top: 40 }} />
      <LinearGradient colors={['#0c514921', '#0a1422b3']} style={{ borderRadius: 16, width: 284, height: 148, left: 52, top: -125 }} />
      <ContainerSelectionSounds>
        <LinearGradient colors={['#0D2A34', '#0A1422']} style={{ flex: 1, borderRadius: 16 }}>
          {props.children}
        </LinearGradient>
      </ContainerSelectionSounds>
    </ContainerScreen>
  );
}

export default GridMenu;