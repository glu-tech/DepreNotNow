import React, { useEffect, useState } from 'react';
import GridMenu from '../../components/GridMenu';
import { CardStyleSound } from '../../components/CardStyleSound';
import ViewSelectedOption from '../../components/ViewSelectedOption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export function SelectionMusic() {
  const navigation = useNavigation();
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();

  useEffect(() => {
      async function loadStorageBinaural() {
          const typeBinaural:string | null = await AsyncStorage.getItem('@deprenotnow:typeBinaural');
          setTypeBinauralSound(typeBinaural?.split(',')[0] || '');
      }

      loadStorageBinaural();
  },[]);

  async function requestBackgroundSound(type:{name: string, value: string}){
    await AsyncStorage.setItem('@deprenotnow:backgroundSound', `${[type.name, type.value]}`).then(() => {
      navigation.navigate('SelectionTime');
    });
  }

  return (
      <GridMenu title='Qual estilo vamos escutar?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={`${typeBinauralSound}`} imgName={"binaural"} borderTop={16} borderBottom={16} />

        <CardStyleSound onPress={() => requestBackgroundSound({name:'LoFi', value:'lofi'})} head='LoFi' topLocate={35} imgName='lofi' />
        <CardStyleSound onPress={() => requestBackgroundSound({name:'Soft Rock', value:'safe_rock'})} head='Soft Rock' topLocate={60} imgName='softRock' />
        <CardStyleSound onPress={() => requestBackgroundSound({name:'Indie', value:'indie'})} head='Indie' topLocate={85} imgName='indie' />
      </GridMenu>
  );
}

export default SelectionMusic;