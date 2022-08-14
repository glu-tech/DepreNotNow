import React, { useEffect } from 'react';
import { Title } from './styles';
import { Card } from '../../components/Card';
import ContainerScreen from '../../components/ContainerScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    saveUseDays();
},[]);

  async function saveUseDays() {
    AsyncStorage.getItem('@deprenotnow:startUseAppDate').then(async (obj) => {
      const date = Math.floor(convertMsToDay(new Date(obj || '').getTime()));
      const today = Math.floor(convertMsToDay(new Date().getTime()));
      
      let result = today - date;
      
      if(result > 0){
        AsyncStorage.getItem('@deprenotnow:startUseApp').then(async (useDays) => {
          if(!useDays){
            await AsyncStorage.setItem('@deprenotnow:startUseApp', `${1}`);
          }else{
            await AsyncStorage.setItem('@deprenotnow:startUseApp', `${parseInt((useDays || '')) + 1}`);
          }
        });
      } else {
        AsyncStorage.getItem('@deprenotnow:startUseApp').then(async (useDays) => {
          if(!useDays)
            await AsyncStorage.setItem('@deprenotnow:startUseApp', `${1}`);
        });
      }
    }).finally(async () => {
      await AsyncStorage.setItem('@deprenotnow:startUseAppDate', `${new Date()}`);
    });
  }

  function convertMsToDay(milliseconds: number) {
    const dayInMs:number = 86400000;

    return milliseconds / dayInMs;
  }

  async function requestTypeBinaural(type:{name: string, value: string}){
      await AsyncStorage.setItem('@deprenotnow:typeBinaural', `${[type.name, type.value]}`).then(() => {
        navigation.navigate('SelectionMusic');
      });
  }

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[true, false, false]}>
      <Title>O que vamos fazer hoje?</Title>

      <Card onPress={() => requestTypeBinaural({name: 'Relaxar', value: 'calm'})} style={{ top: RFValue(158), left: RFValue(13), position: 'absolute' }} imgName={"relax"} head={"Relaxar"} subhead={"Você quer aliviar aquela crise de ansiedade?"} />
      <Card onPress={() => requestTypeBinaural({name: 'Dormir', value: 'sleep'})} style={{ top: RFValue(320), left: RFValue(13), position: 'absolute' }} imgName={"sleep"} head={"Dormir"} subhead={"Você está sem conseguir dormir?"} />
      <Card onPress={() => requestTypeBinaural({name: 'Alegrar', value: 'happy'})} style={{ top: RFValue(482), left: RFValue(13), position: 'absolute' }} imgName={"happy"} head={"Alegrar"} subhead={"Você está triste e precisa se animar?"} />

    </ContainerScreen>
  );
}

export default Home;