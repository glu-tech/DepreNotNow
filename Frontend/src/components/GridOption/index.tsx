import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { MaterialIcon } from '../../components/Icon';
import { Grid, Label } from './styles';

interface props {
    label:string;
    icon:string;
    onPress?:((event: GestureResponderEvent) => void) | undefined
    style?:StyleProp<ViewStyle>;
}

export function GridOption(props:props) {
  return (
    <Grid onPress={props.onPress} style={props.style}>
        <Label>{props.label}</Label>
        <MaterialIcon size="extraLarge" color="#d8f0ed" name={props.icon} />
    </Grid>
  );
}

export default GridOption;