import React, { useEffect, useState } from 'react';
import Submit from '../../components/Button';
import ContainerScreen from '../../components/ContainerScreen';
import { InputName, LineDividerInput, QuestionLabel, Subtitle, Title, WelcomeImage } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

export function Welcome() {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();

  useEffect(() => {
    const LoadStorageUsername = () => {
      AsyncStorage.getItem('@deprenotnow:user').then((username) => {
        if(username){
          navigation.navigate('HowAreYou');
        }
      }); 
    }

    LoadStorageUsername();
  },[]);

  async function handleConfirmation(){
    if (name === "" || name === undefined || name === null){
      return Alert.alert('Me diz como chamar você 😢');
    }
    try {
      AsyncStorage.setItem('@deprenotnow:user', `${name}`).then(() => {
        navigation.navigate('Home');
      });
      await api.post('user/name', { "username": name });
    } catch (error) {
      Alert.alert('Não foi possível salvar o seu nome 😨');
    }
  }

  function handleInputChange(value: string) {
    setName(value);
  }

  return (
    <ContainerScreen visibleMenuBar={false}>
        <WelcomeImage source={require('./../../assets/imgWelcome.png')} />
        <Title>Seja bem-vindo</Title>
        <Subtitle>Esse é o DepreNotNow,                 o app que vai alegrar seu dia!</Subtitle>
        <QuestionLabel>Como devemos te chamar?</QuestionLabel>
        <InputName autoFocus placeholderTextColor={"#d8f0ed99"} placeholder="João da Silva" onChangeText={handleInputChange} />
        <LineDividerInput />
        <Submit label={"Continuar"} onPress={handleConfirmation} style={{ left: RFValue(35), top: RFValue(610) }} /> 
    </ContainerScreen>
  );
}

export default Welcome;