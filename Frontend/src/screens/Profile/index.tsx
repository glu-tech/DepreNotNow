import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AboutUser from '../../components/AboutUser';
import ContainerScreen from '../../components/ContainerScreen';
import RankingDescription from '../../components/RankingDescription';
import UseDaysLayoutZone from '../../components/UseDaysLayoutZone';
import { BoxOptions, Title, DividerHorizontal, DividerVertical } from './styles';

export function Profile() {
  const navigation = useNavigation();
  const [username, setUsername] = useState<string>('');
  const [startUseApp, setStartUseApp] = useState<number>(0);
  const [longestSession, setLongestSession] = useState<number>(0);
  const [totalSessions, setTotalSessions] = useState<number>(0);
  const [hoursInApp, setHoursInApp] = useState<number>(0);
  const [bestBinauralCalm, setBestBinauralCalm] = useState<number>(0);
  const [bestBinauralSleep, setBestBinauralSleep] = useState<number>(0);
  const [bestBinauralHappy, setBestBinauralHappy] = useState<number>(0);
  const [bestBackgroundLofi, setBestBackgroundLofi] = useState<number>(0);
  const [bestBackgroundIndie, setBestBackgroundIndie] = useState<number>(0);
  const [bestBackgroundSafeRock, setBestBackgroundSafeRock] = useState<number>(0);

  useEffect(() => {
      const LoadStorageUsername = async () => {
          const username:string | null = await AsyncStorage.getItem('@deprenotnow:user');
          setUsername(username || '');
      }

      const LoadStorageUseDays = async () => {
        const startUseApp:string | null = await AsyncStorage.getItem('@deprenotnow:startUseApp');
        setStartUseApp(parseInt(startUseApp || ''));
      }

      const LoadStorageLongestSession = async () => {
        const longestSession:string | null = await AsyncStorage.getItem('@deprenotnow:longestSession');
        setLongestSession(parseInt(longestSession || ''));
      }

      const LoadStorageTotalSessions = async () => {
        const totalSessions:string | null = await AsyncStorage.getItem('@deprenotnow:totalSessions');
        setTotalSessions(parseInt(totalSessions || ''));
      }

      const LoadStorageHoursInApp = async () => {
        const hoursInApp:string | null = await AsyncStorage.getItem('@deprenotnow:hoursInApp');
        setHoursInApp(parseInt(hoursInApp || ''));
      }

      const LoadStorageBestBinaural = async () => {
        const calm:string | null = await AsyncStorage.getItem('@deprenotnow:bestBinauralCalm');
        const sleep:string | null = await AsyncStorage.getItem('@deprenotnow:bestBinauralSleep');
        const happy:string | null = await AsyncStorage.getItem('@deprenotnow:bestBinauralHappy');

        setBestBinauralCalm(parseInt(calm || ''));
        setBestBinauralSleep(parseInt(sleep || ''));
        setBestBinauralHappy(parseInt(happy || ''));
      }

      const LoadStorageBestBackground = async () => {
        const lofi:string | null = await AsyncStorage.getItem('@deprenotnow:bestBackgroundLofi');
        const indie:string | null = await AsyncStorage.getItem('@deprenotnow:bestBackgroundIndie');
        const safeRock:string | null = await AsyncStorage.getItem('@deprenotnow:bestBackgroundSafe_rock');

        setBestBackgroundLofi(parseInt(lofi || ''));
        setBestBackgroundIndie(parseInt(indie || ''));
        setBestBackgroundSafeRock(parseInt(safeRock || ''));
      }

      LoadStorageUsername();
      LoadStorageUseDays();
      LoadStorageLongestSession();
      LoadStorageTotalSessions();
      LoadStorageHoursInApp();
      LoadStorageBestBinaural();
      LoadStorageBestBackground();
  },[]);

  const Logout = () => {
    Alert.alert(
      "Atenção",
      "Caso escolha sair, perderá seu histórico de tudo salvo até o momento",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Prosseguir", onPress: () => { DeleteAllData(); RedirectToWelcome(); } }
      ]
    );
  }

  const DeleteAllData = () => {
    AsyncStorage.clear();
  }

  const RedirectToWelcome = () => {
    navigation.navigate('Welcome');
  }

  const AmountUseDays = () => {
    if(startUseApp.toString() != 'NaN'){
      return startUseApp > 99 ? '99+' : startUseApp < 10 ? `0${startUseApp}` : `${startUseApp}`;
    }

    return '00';
  }

  const AmountLongestSession = () => {
    if(longestSession.toString() == 'NaN'){
      return '0 dias';
    }

    let result = longestSession > 99 ? '99+' : `${longestSession}`;
    return `${result} dias`;
  }

  const BestBinaural = () => {
    return BestSound(new Map([
      ['Relaxar', bestBinauralCalm],
      ['Dormir', bestBinauralSleep],
      ['Alegar', bestBinauralHappy] ]))
  }

  const BestBackground = () => {
    return BestSound(new Map([
      ['LoFi', bestBackgroundLofi],
      ['Indie', bestBackgroundIndie],
      ['Soft Rock', bestBackgroundSafeRock] ]))
  }

  const BestSound = ((sounds:Map<string, number>) => {
    for (let current of sounds.entries()) {
      for (let sound of sounds.entries()) {
        if(current[1] != sound[1]){
          if(current[1] >= (sound[1].toString() == 'NaN' ? 0 : sound[1]) && current[1].toString() != 'NaN') 
            return current[0];    
        }
      }
    }
    return 'Nenhum';
  });

  const TotalSessions = (() => {
    if(totalSessions.toString() != 'NaN'){
      return `${totalSessions < 10 ? '0' + totalSessions : totalSessions}`;
    }

    return '00';
  });

  const HoursInApp = (() => {
    if(hoursInApp.toString() != 'NaN'){
      return `${(hoursInApp/60) < 10 && (hoursInApp/60) >= 1 ? '0' + (hoursInApp/60).toFixed(0) : (hoursInApp/60).toFixed(0)}h`;
    }

    return '0h';
  });

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[false, false, true]}>
    <Title>Meu perfil</Title>
      <BoxOptions style={{ top: 150, height: 300 }}>
        <LinearGradient colors={['#092027', '#112036']} style={{ flex: 1, borderRadius: 16, opacity: 0.82 }}>
          <AboutUser username={username} onLogout={Logout} />
          <DividerHorizontal />
          <RankingDescription title='Binaural mais escutado' description={`${BestBinaural()}`} />
          <DividerVertical />
          <RankingDescription title='Estilo favorito' description={`${BestBackground()}`} styleContainer={{ left: 200 }} />
        </LinearGradient>
      </BoxOptions>
      <BoxOptions style={{ top: 480, height: 240 }}>
        <LinearGradient colors={['#092027', '#112036']} style={{ flex: 1, borderRadius: 16, opacity: 0.82 }}>
          <UseDaysLayoutZone description={AmountUseDays()} />
          <RankingDescription title='Total de seções' description={TotalSessions()}
            styleContainer={{ width: 98, left: 15, top: 160 }}
            styleTitle={{ width: 98, textAlign: 'center' }}
            styleDescription={{  width: 98, height: 26, fontWeight: 'normal', lineHeight: 32, textAlign: 'center' }} />
          
          <RankingDescription title='Horas no app' description={HoursInApp()}
            styleContainer={{ width: 98, left: 129, top: 160 }}
            styleTitle={{ width: 98, textAlign: 'center' }}
            styleDescription={{  width: 98, height: 26, fontWeight: 'normal', lineHeight: 32, textAlign: 'center' }} />
          
          <RankingDescription title='Série mais longa' description={AmountLongestSession()}
            styleContainer={{ width: 98, left: 243, top: 160 }}
            styleTitle={{ width: 98, textAlign: 'center' }}
            styleDescription={{  width: 98, height: 26, fontWeight: 'normal', lineHeight: 32, textAlign: 'center' }} />
        </LinearGradient>
      </BoxOptions>
    </ContainerScreen>
  );
}

export default Profile;