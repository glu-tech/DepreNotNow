import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Linking } from 'react-native';
import { Card } from '../../components/Card';
import ContainerScreen from '../../components/ContainerScreen';
import GridOption from '../../components/GridOption';
import { HelpPsychiatric, HelpPsychological, TalkProfissional, UserManual } from '../../constants/urls';
import { OptionsHelp } from '../../enums/options.enum';
import { ArticlesApi } from '../../services/articles';
import { BoxOptions, Subtitle, Title } from './styles';

export function Help() {
  const navigation = useNavigation();

  const HandleAction = (action:OptionsHelp) => {
    if(action === 1)
      navigation.navigate('Profile');
    if(action === 2)
      Linking.openURL(UserManual);
    if(action === 3)
      Linking.openURL(TalkProfissional);
    if(action === 4)
      Linking.openURL(HelpPsychiatric);
    if(action === 5)
      Linking.openURL(HelpPsychological);
  }

  return (
    <ContainerScreen visibleMenuBar={true} optionMenuSelected={[false, false, true]}>
    <Title>Ajuda</Title>
      <BoxOptions style={{
        shadowOffset: {
            width: 1,
            height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.22
      }}>
        <LinearGradient colors={['#092027', '#112036']} style={{ flex: 1, borderRadius: 16, opacity: 0.82 }}>
          <GridOption onPress={() => { HandleAction(1) }} label='Meu perfil' icon='account-outline' style={{ top: 25 }} />
          <GridOption onPress={() => { HandleAction(2) }} label='Como funciona?' icon='help' style={{ top: 80 }} />
          <GridOption onPress={() => { HandleAction(3) }} label='Conversar com um profissional' icon='message-outline' style={{ top: 135 }} />
          <GridOption onPress={() => { HandleAction(4) }} label='Ajuda psiquiátrica' icon='emoticon-happy-outline' style={{ top: 190 }} />
          <GridOption onPress={() => { HandleAction(5) }} label='Ajuda psicológica' icon='hospital-box-outline' style={{ top: 245 }} />
        </LinearGradient>
      </BoxOptions>
    <Subtitle>Artigos</Subtitle>
    <FlatList  style={{ top: 525, left: 16, width: 360, maxHeight: 250, position: 'absolute' }}
        data={ArticlesApi}
        keyExtractor={(item) => String(item.key)} 
        renderItem={({item}) => (
          <Card head={item.title} 
                      subhead={item.content} 
                      onPress={() => { Linking.openURL(item.link); }} 
                      style={{ paddingBottom: 15 }} 
                      imgName={item.img}
          ></Card>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1}}
        scrollEnabled={true}
        horizontal={false}
        />
    </ContainerScreen>
  );
}

export default Help;