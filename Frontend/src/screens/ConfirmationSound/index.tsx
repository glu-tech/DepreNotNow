import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import Submit from '../../components/Button';
import GridMenu from '../../components/GridMenu';
import ViewSelectedOption from '../../components/ViewSelectedOption';
import { CancelButton, CancelLabel } from './styles';

export function ConfirmationSound() {
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
  const [typeBackgroundSound, setTypeBackgroundSound] = useState<string>();
  const [timeSound, setTimeSound] = useState<Number>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    async function loadStorage() {
      const typeBinaural: string | null = await AsyncStorage.getItem(
        "@deprenotnow:typeBinaural"
      );
      const typeBackground: string | null = await AsyncStorage.getItem(
        "@deprenotnow:backgroundSound"
      );
      const timeSound: string | null = await AsyncStorage.getItem(
        "@deprenotnow:timeSound"
      );

      setTimeSound(Number(timeSound));
      setTypeBinauralSound(() => typeBinaural?.split(",")[0] || "");
      setTypeBackgroundSound(() => typeBackground?.split(",")[0] || "");
    }

    loadStorage();
  }, []);

  async function handleConfirmation(){
    navigation.navigate('MusicPlayer');
  }

  async function handleCancel(){
    navigation.navigate('Home');
  }

  return (
      <GridMenu title='Está tudo certo?' visibleMenuBar={true} optionMenuSelected={[true, false, false]} >
        <ViewSelectedOption text={`${typeBinauralSound}`} imgName={"binaural"} borderTop={15} borderBottom={0} />
        <ViewSelectedOption text={`${typeBackgroundSound}`} imgName={"background"} borderTop={0} borderBottom={0} />
        <ViewSelectedOption text={`${timeSound} minutos`} imgName={"time"} borderTop={0} borderBottom={15} opacity={0.5} />
        <Submit label={"Vamos lá"} onPress={handleConfirmation} style={{ left: 35, top: 60 }} />
        <CancelButton onPress={handleCancel}>
            <CancelLabel>Cancelar</CancelLabel>
        </CancelButton>
      </GridMenu>
  );
}

export default ConfirmationSound;