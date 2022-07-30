import { useNavigation } from '@react-navigation/native';
import React from 'react';
import ContainerScreen from '../../components/ContainerScreen';
import { ButtonFelling, ButtonNext, LabelFelling, Title } from './styles';
import { MaterialIcon } from '../../components/Icon';
import api from '../../services/api';
import { RFValue } from 'react-native-responsive-fontsize';


export function HowAreYou() {
  const navigation = useNavigation();

  const handleGoToHome = (async (feeling?:string) => {
    try {
      if(feeling != undefined)
        await api.post('user/feeling', { "feeling": feeling });
    } finally {
      navigation.navigate('Home');
    }
  });

  return (
    <ContainerScreen visibleMenuBar={false} optionMenuSelected={[false, false, false]}>
    <Title>Como você está se sentindo?</Title>

      <ButtonFelling onPress={() => handleGoToHome('sadness')} style={{ left: RFValue(10) }} >
        <LabelFelling>😭</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('sadder')} style={{ left: RFValue(60) }} >
        <LabelFelling>😪</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('sad')} style={{ left: RFValue(110) }} >
        <LabelFelling>😕</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('neutral')} style={{ left: RFValue(160) }} >
        <LabelFelling>😶</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happy')} style={{ left: RFValue(210) }} >
        <LabelFelling>🙂</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happier')} style={{ left: RFValue(260) }} >
        <LabelFelling>🙂</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happiest')} style={{ left: RFValue(310) }} >
        <LabelFelling>😀</LabelFelling>
      </ButtonFelling>

      <ButtonNext onPress={() => handleGoToHome()} >
        <MaterialIcon name={'arrow-right'} size={'megaLarge'} color={'green'} />
      </ButtonNext>
    </ContainerScreen>
  );
}

export default HowAreYou;