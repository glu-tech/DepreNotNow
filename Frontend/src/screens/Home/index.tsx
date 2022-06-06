import React from 'react';
import { Title } from './styles';
import { CardSound } from '../../components/CardSound';
import ContainerScreen from '../../components/ContainerScreen';

export function Home() {
  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[true, false, false]}>
      <Title>O que vamos fazer hoje?</Title>

      <CardSound topLocate={182} imgName={"relax"} head={"Relaxar"} subhead={"Você quer aliviar aquela crise de ansiedade?"} />
      <CardSound topLocate={372} imgName={"sleep"} head={"Dormir"} subhead={"Você está sem conseguir dormir?"} />
      <CardSound topLocate={562} imgName={"happy"} head={"Alegrar"} subhead={"Você está triste e precisa se animar?"} />

    </ContainerScreen>
  );
}

export default Home;