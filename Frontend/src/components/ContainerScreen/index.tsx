import React from 'react';
import { Container } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu } from '../../components/Menu';
import { View } from 'react-native';

export function ContainerScreen(props:any) {
  return (
    <LinearGradient start={{ x: -0.8, y: -0.1 }} end={{ x: 0.6, y: 0.1 }}  colors={['#0C5149', '#0D192B']} style={{ flex: 1 }}>
      <Container>
        { props.visibleMenuBar ?
        <Menu selected={props.optionMenuSelected} />
        : <View />
        }
        {props.children}
      </Container>
    </LinearGradient>
  );
}

export default ContainerScreen;