import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Audio } from "expo-av";
import ButtonControlSound from "../../components/ButtonControlSound";
import CirclePlayerMusic from "../../components/CirclePlayerMusic";
import ContainerScreen from "../../components/ContainerScreen";
import { Alert } from "react-native";
import {
  BackgroundTypeLabel,
  BinauralTypeLabel,
  Title,
  ControlSound,
} from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

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

  const handlerFinish = (async () => {
    if (!audio) return;
    const status = await audio.getStatusAsync();
    if (status.isLoaded && time == 0){
      setPlaying(status.isPlaying);
      audio.stopAsync();
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
        <Spinner
          visible={true}
          textContent={"Carregando..."}
          textStyle={{ color: "#FFF" }}
        />
      ) : null}
      <Title>Player</Title>
      <CirclePlayerMusic onPress={TogglePlay} playing={!playing} valueMinutes={(time && getTime()) || ""}>
        <BinauralTypeLabel>
          {typeBinauralSound?.split(",")[0]}
        </BinauralTypeLabel>
        <BackgroundTypeLabel>
          {typeBackgroundSound?.split(",")[0]}
        </BackgroundTypeLabel>
        {/* <ControlSound>
          <ButtonControlSound
            onPress={TogglePlay}
            imgName={playing ? "playMusic" : "pauseMusic"}
            styles={{
              position: "absolute",
              width: playing ? 60 : 70,
              height: playing ? 60 : 70,
              left: 80,
              top: playing ? -3 : -7,
            }}
          />
        </ControlSound> */}
      </CirclePlayerMusic>
    </ContainerScreen>
  );
}

export default MusicPlayer;