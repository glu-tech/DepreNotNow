import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ItemMenu } from "../ItemMenu";

export function Menu(props:{selected:boolean[]}) {
    const navigation = useNavigation();

    const [typeBinauralSound, setTypeBinauralSound] = useState<string>();
    const [backgroundSound, setBackgroundSound] = useState<string>();
    const [timeSound, setTimeSound] = useState<string>();

    useEffect(() => {
        async function loadStorageBinaural() {
            const typeBinaural = await AsyncStorage.getItem('@deprenotnow:typeBinaural');
            setTypeBinauralSound(typeBinaural || '');
        }

        async function loadStorageBackgroundSound() {
            const background = await AsyncStorage.getItem('@deprenotnow:backgroundSound');
            setBackgroundSound(background || '');
        }

        async function loadStorageTimeSound() {
            const time = await AsyncStorage.getItem('@deprenotnow:timeSound');
            setTimeSound(time || '');
        }

        loadStorageBinaural();
        loadStorageBackgroundSound();
        loadStorageTimeSound();
    },[]);

    async function handleRedirectPlayer(){
        if(typeBinauralSound != '' && backgroundSound != '' && timeSound != ''){
            navigation.navigate('MusicPlayer');
        } else {
            return Alert.alert('Escolha seu estilo musical primeiro! 😉');
        }
    }

    function handleRedirectHome(){
        navigation.navigate('Home');
    }

    function handleRedirectHelp(){
        navigation.navigate('Help');
    }

    return (
    <View>
        <ItemMenu onPress={handleRedirectHome} leftLocate={50} icon={"home-outline"} nameItem={"Início"} selected={props.selected[0]} />
        <ItemMenu onPress={handleRedirectPlayer} leftLocate={166} icon={""} nameItem={"Player"} selected={props.selected[1]} />
        <ItemMenu onPress={handleRedirectHelp} leftLocate={282} icon={"lightbulb-outline"} nameItem={"Ajuda"} selected={props.selected[2]} />
    </View>
)};