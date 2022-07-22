import React from 'react';
import { GestureResponderEvent, View } from 'react-native';
import { MaterialIcon } from '../../components/Icon';
import { ImgProfile, ImgBackgroundProfile, ProfileName, Logout } from './styles';

interface props {
    username:string,
    onLogout?: ((event: GestureResponderEvent) => void) | undefined
}

export function AboutUser(props:props) {
  return (
    <View>
        <ImgBackgroundProfile source={require('./../../assets/imgHelpArticleZero.png')} borderTopLeftRadius={16} borderTopRightRadius={16}/>
        <ImgProfile source={require('./../../assets/imgProfile.png')} />
        <ProfileName>{props.username}</ProfileName>
        <Logout onPress={props.onLogout}>
          <MaterialIcon size="extraLarge" color="#d8f0ed" name="logout" />
        </Logout>
    </View>
  );
}

export default AboutUser;