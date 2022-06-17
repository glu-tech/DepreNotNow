import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Audio } from 'expo-av';
import ButtonControlSound from '../../components/ButtonControlSound';
import CirclePlayerMusic from '../../components/CirclePlayerMusic';
import ContainerScreen from '../../components/ContainerScreen';
import { BackgroundTypeLabel, BinauralTypeLabel, Title, ControlSound } from './styles';
import api from '../../services/api';

export function MusicPlayer() {
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
  const [typeBackgroundSound, setTypeBackgroundSound] = useState<string>();
  const [timeSound, setTimeSound] = useState<string>();
  const [spinner, setSpinner] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
      async function loadStorage() {
          const typeBinaural:string | null = await AsyncStorage.getItem('@deprenotnow:typeBinaural');
          const typeBackground:string | null = await AsyncStorage.getItem('@deprenotnow:backgroundSound');
          const timeSound:string | null = await AsyncStorage.getItem('@deprenotnow:timeSound');

          setTypeBinauralSound(typeBinaural || '');
          setTypeBackgroundSound(typeBackground || '');
          setTimeSound(timeSound || '');
      }

      loadStorage().then(() => { console.log(typeBinauralSound) });
  },[]);

  useEffect(() => {
    loadAudio().finally(() => { setSpinner(false) });
  }, []);

  const playAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const pauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const loadAudio = async () => {
    setLoading(true);
    setSpinner(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        console.log(timeSound, typeBackgroundSound, typeBinauralSound);
        await api.post('sound/generate', { 
                "typeBinaural": "calm",
                "typeBackground": "lofi",
                "time": 300
             }).then(async (res) => {
                console.log(res.data)
                const result = await sound.current.loadAsync({ uri: res.data['url_sound'] }, {}, true);
                if (result.isLoaded === false) {
                  setLoading(false);
                  setSpinner(false);
                } else {
                  setLoading(false);
                  setLoaded(true);
                  setSpinner(false);
                }
             });
      } catch (error) {
        setLoading(false);
        setSpinner(false);
      }
    } else {
      setLoading(false);
      setSpinner(false);
    }
  };

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[false, true, false]}>
      { 
        spinner == true 
        ? <Spinner visible={true} textContent={'Carregando...'} textStyle={{ color: '#FFF' }} />
        : null
      }
        <Title>Player</Title>
        <CirclePlayerMusic valueMinutes={`${timeSound}:00`}>
          <BinauralTypeLabel>{typeBinauralSound?.split(',')[0]}</BinauralTypeLabel>
          <BackgroundTypeLabel>{typeBackgroundSound?.split(',')[0]}</BackgroundTypeLabel>
          <ControlSound>
            <ButtonControlSound onPress={() => {}} imgName='backTime' 
                  styles={{ 
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    left: 15, 
                  }} />

            <ButtonControlSound onPress={() => playAudio()} 
                  imgName='playMusic' 
                  styles={{ 
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    left: 80, 
                    top: -7
                  }} />

            <ButtonControlSound onPress={() => {}} 
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