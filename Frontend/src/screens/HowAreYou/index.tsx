import { useNavigation } from '@react-navigation/native';
import React from 'react';
import ContainerScreen from '../../components/ContainerScreen';
import { ButtonFelling, ButtonNext, LabelFelling, Title } from './styles';
import { MaterialIcon } from '../../components/Icon';
import api from '../../services/api';


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

      <ButtonFelling onPress={() => handleGoToHome('sadness')} style={{ left: 32 }} >
        <LabelFelling>😭</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('sadder')} style={{ left: 82 }} >
        <LabelFelling>😪</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('sad')} style={{ left: 132 }} >
        <LabelFelling>😕</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('neutral')} style={{ left: 182 }} >
        <LabelFelling>😶</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happy')} style={{ left: 232 }} >
        <LabelFelling>🙂</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happier')} style={{ left: 282 }} >
        <LabelFelling>🙂</LabelFelling>
      </ButtonFelling>

      <ButtonFelling onPress={() => handleGoToHome('happiest')} style={{ left: 332 }} >
        <LabelFelling>😀</LabelFelling>
      </ButtonFelling>

      <ButtonNext onPress={() => handleGoToHome()} >
        <MaterialIcon name={'arrow-right'} size={'megaLarge'} color={'green'} />
      </ButtonNext>
    </ContainerScreen>
  );
}

export default HowAreYou;