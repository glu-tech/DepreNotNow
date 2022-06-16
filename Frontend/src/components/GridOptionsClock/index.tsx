import React from 'react';
import ClockOption from '../../components/ClockOption';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export function GridOptionsClock() {
  const navigation = useNavigation();

  async function requestTimeSound(style:number){
    await AsyncStorage.setItem('@deprenotnow:timeSound', `${style}`).then(() => {
      navigation.navigate('MusicPlayer');
    });
  }

  return (
        <View>
            <ClockOption onPress={() => requestTimeSound(5)} topLocate={50} leftLocate={25} labelTime={"5"} />
            <ClockOption onPress={() => requestTimeSound(15)} topLocate={50} leftLocate={138} labelTime={"15"} />
            <ClockOption onPress={() => requestTimeSound(30)} topLocate={50} leftLocate={251} labelTime={"30"} />

            <ClockOption onPress={() => requestTimeSound(45)} topLocate={168} leftLocate={25} labelTime={"45"} />
            <ClockOption onPress={() => requestTimeSound(60)} topLocate={168} leftLocate={138} labelTime={"60"} />
            <ClockOption onPress={() => requestTimeSound(120)} topLocate={168} leftLocate={251} labelTime={"120"} />
        </View>
  );
}

export default GridOptionsClock;