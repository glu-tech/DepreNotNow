import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import ContainerScreen from "../../components/ContainerScreen";
import CirclePlayerMusic from "../../components/CirclePlayerMusic";
import { BackgroundTypeLabel, BinauralTypeLabel, Title } from "./styles";
import api from "../../services/api";

export function MusicPlayer() {
  const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
  const [typeBackgroundSound, setTypeBackgroundSound] = useState<string>();
  const [timeSound, setTimeSound] = useState<string>();
  const [spinner, setSpinner] = useState<boolean>(false);
  const [loadData, setLoadData] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  const [time, setTime] = useState<number>();
  const timeInterval = useRef<any>();
  const [audio, setAudio] = useState<Audio.Sound>();
  const navigation = useNavigation();

  const getTime = () => {
    if (!time) return "";
    const minutes = Math.floor(time / 60);
    const secounds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(secounds).padStart(
      2,
      "0"
    )}`;
  };
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
      setTime(Number(timeSound) * 60);

      setTypeBinauralSound(() => typeBinaural || "");
      setTypeBackgroundSound(() => typeBackground || "");
      setTimeSound(() => timeSound || "");
      setLoadData(true);
    }

    loadStorage();
  }, []);

  const TogglePlay = useCallback(async () => {
    if (!audio) return;
    const status = await audio.getStatusAsync();
    if (!status.isLoaded) return;
    status.isPlaying ? audio.pauseAsync() : audio.playAsync();
    setPlaying(status.isPlaying);
  }, [audio]);

  useEffect(() => {
    const loadAudio = async () => {
      setSpinner(true);

      try {
        const audioData = await api.post("sound/generate/", {
          typeBinaural: `${typeBinauralSound?.split(",")[1]}`,
          typeBackground: `${typeBackgroundSound?.split(",")[1]}`,
          time: timeSound ? parseInt(timeSound) * 60 : 0,
        });
        const audioBuffer = await Audio.Sound.createAsync(
          { uri: audioData.data["url_sound"] },
          {}
        );
        audioBuffer.sound.setIsLoopingAsync(true).then(() => {
          setAudio(audioBuffer.sound);
        });
      } catch (error) {
        return Alert.alert("Ops... Ocorreu um erro 😓");
      } finally {
        setSpinner(false);
      }
    };
    if (loadData) {
      loadAudio();
    }
  }, [loadData]);

  const handlerTimer = useCallback(async () => {
    if (!audio) return;
    const status = await audio.getStatusAsync();
    if (status.isLoaded && status.isPlaying) {
      const timeout = setTimeout(() => {
        setTime((oldSeconts) =>
          oldSeconts == null ? Number(timeSound) : oldSeconts > 0 ? oldSeconts - 1 : 0
        );
        handlerTimer();
      }, 1000);
    }
  }, [audio]);

  const setProfileRanking = (() => {
    AsyncStorage.getItem('@deprenotnow:totalSessions').then(async (sessions) => {
      if(!sessions) {
        await AsyncStorage.setItem('@deprenotnow:totalSessions', `${1}`)
      } else {
        await AsyncStorage.setItem('@deprenotnow:totalSessions', `${parseInt(sessions) + 1}`)
      }
    });

    AsyncStorage.getItem('@deprenotnow:hoursInApp').then(async (hours) => {
      if(!hours) {
        await AsyncStorage.setItem('@deprenotnow:hoursInApp', `${timeSound}`)
      } else {
        await AsyncStorage.setItem('@deprenotnow:hoursInApp', `${hours + timeSound}`)
      }
    });

    bestSound();
    longestSession();
  });

  const bestSound = (() => {
    const binaural = typeBinauralSound?.split(",")[1] || '';
    const background = typeBackgroundSound?.split(",")[1] || '';

    saveBestSound(binaural.charAt(0).toUpperCase() + binaural.slice(1), 'Binaural');
    saveBestSound(background.charAt(0).toUpperCase() + background.slice(1), 'Background');
  });

  const saveBestSound = ((key:string, type:string) => {
    const keyItem = `@deprenotnow:best${type}${key}`;
    AsyncStorage.getItem(keyItem).then(async (countBinaural) => {
      if(!countBinaural) {
        await AsyncStorage.setItem(keyItem, `${1}`)
      } else {
        await AsyncStorage.setItem(keyItem, `${countBinaural + 1}`)
      }
    });
  });

  const longestSession = (() => {
    AsyncStorage.getItem('@deprenotnow:longestSessionDate').then(async (obj) => {
      const date = Math.floor(convertMsToDay(new Date(obj || '').getTime()));
      const today = Math.floor(convertMsToDay(new Date().getTime()));

      let result = today - date;
      
      if(result == 1){
        AsyncStorage.getItem('@deprenotnow:longestSession').then(async (sequenceDays) => {
          if(!sequenceDays){
            await AsyncStorage.setItem('@deprenotnow:longestSession', `${1}`);
          }else{
            await AsyncStorage.setItem('@deprenotnow:longestSession', `${parseInt((sequenceDays || '')) + 1}`);
          }
        });
      } else {
        AsyncStorage.getItem('@deprenotnow:longestSession').then(async (sequenceDays) => {
          if(!sequenceDays)
            await AsyncStorage.setItem('@deprenotnow:longestSession', `${1}`);
        });
      }
    }).finally(async () => {
      await AsyncStorage.setItem('@deprenotnow:longestSessionDate', `${new Date()}`);
    });
  });

  const convertMsToDay = ((milliseconds: number) => {
    const dayInMs:number = 86400000;

    return milliseconds / dayInMs;
  });

  const handlerFinish = (async () => {
    if (!audio) return;
    const status = await audio.getStatusAsync();
    if (status.isLoaded && time == 0){
      setPlaying(status.isPlaying);
      audio.stopAsync();
      setProfileRanking();
      Alert.alert("Acabou!!! Vamos mais um som binaural?")
      navigation.navigate('Home');
    }
  });

  useEffect(() => {
    handlerTimer();
  }, [playing]);

  useEffect(() => {
    handlerFinish();
  }, [time]);

  return (
    <ContainerScreen
      visibleMenuBar={true}
      optionMenuSelected={[false, true, false]}
    >
      {spinner == true ? (
        <Spinner visible={true} textContent={"Carregando..."} textStyle={{ color: "#FFF" }} />
      ) : null}
      <Title>Player</Title>
      <CirclePlayerMusic onPress={TogglePlay} playing={!playing} valueMinutes={(time && getTime()) || ""}>
        <BinauralTypeLabel>
          {typeBinauralSound?.split(",")[0]}
        </BinauralTypeLabel>
        <BackgroundTypeLabel>
          {typeBackgroundSound?.split(",")[0]}
        </BackgroundTypeLabel>
      </CirclePlayerMusic>
    </ContainerScreen>
  );
}

export default MusicPlayer;