import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Container, Title, Description } from './styles';

interface props {
    title:string,
    description:string,
    styleContainer?: StyleProp<ViewStyle>,
    styleTitle?: StyleProp<TextStyle>,
    styleDescription?: StyleProp<TextStyle>
}

export function RankingDescription(props:props) {
  return (
        <Container style={props.styleContainer}>
            <Title style={props.styleTitle}>{props.title}</Title>
            <Description style={props.styleDescription}>{props.description}</Description>
        </Container>
  );
}

export default RankingDescription;