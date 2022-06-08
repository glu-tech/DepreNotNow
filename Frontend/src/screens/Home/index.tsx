import React from 'react';
import { Title } from './styles';
import { CardSound } from '../../components/CardSound';
import ContainerScreen from '../../components/ContainerScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  async function requestTypeBinaural(type:string){
      await AsyncStorage.setItem('@deprenotnow:typeBinaural', `${type}`).then(() => {
        navigation.navigate('SelectionMusic');
      });
  }

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[true, false, false]}>
      <Title>O que vamos fazer hoje?</Title>

      <CardSound onPress={() => requestTypeBinaural("relax")} topLocate={182} imgName={"relax"} head={"Relaxar"} subhead={"Você quer aliviar aquela crise de ansiedade?"} />
      <CardSound onPress={() => requestTypeBinaural("sleep")} topLocate={372} imgName={"sleep"} head={"Dormir"} subhead={"Você está sem conseguir dormir?"} />
      <CardSound onPress={() => requestTypeBinaural("happy")} topLocate={562} imgName={"happy"} head={"Alegrar"} subhead={"Você está triste e precisa se animar?"} />

    </ContainerScreen>
  );
}

export default Home;