import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import ButtonControlSound from '../../components/ButtonControlSound';
import CirclePlayerMusic from '../../components/CirclePlayerMusic';
import ContainerScreen from '../../components/ContainerScreen';
import { BackgroundTypeLabel, BinauralTypeLabel, Title, ControlSound } from './styles';

export function MusicPlayer() {
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
  const [typeBackgroundSound, setTypeBackgroundSound] = useState<string>();
  const [timeSound, setTimeSound] = useState<string>();

  useEffect(() => {
      async function loadStorage() {
          const typeBinaural:string | null = await AsyncStorage.getItem('@deprenotnow:typeBinaural');
          const typeBackground:string | null = await AsyncStorage.getItem('@deprenotnow:backgroundSound');
          const timeSound:string | null = await AsyncStorage.getItem('@deprenotnow:timeSound');

          setTypeBinauralSound(typeBinaural?.split(',')[0] || '');
          setTypeBackgroundSound(typeBackground?.split(',')[0] || '');
          setTimeSound(timeSound || '');
      }

      loadStorage();
  },[]);

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[false, true, false]}>
        <Title>Player</Title>
        <CirclePlayerMusic valueMinutes={`${timeSound}:00`}>
          <BinauralTypeLabel>{typeBinauralSound}</BinauralTypeLabel>
          <BackgroundTypeLabel>{typeBackgroundSound}</BackgroundTypeLabel>
          <ControlSound>
            <ButtonControlSound imgName='backTime' 
                  styles={{ 
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    left: 15, 
                  }} />

            <ButtonControlSound 
                  imgName='playMusic' 
                  styles={{ 
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    left: 80, 
                    top: -7
                  }} />

            <ButtonControlSound 
                  imgName='fowardTime' 
                  styles={{ 
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    left: 155
                  }} />
          </ControlSound>
        </CirclePlayerMusic>
    </ContainerScreen>
  );
}

export default MusicPlayer;