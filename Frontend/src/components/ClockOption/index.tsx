import React from 'react';
import { GridClock, ImgClock, LabelClock, LabelDescriptionClock } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

interface props {
    topLocate:number;
    leftLocate:number;
    labelTime:string;
    onPress:() => {};
}

export function ClockOption(props:props) {
    return (
        <GridClock onPress={props.onPress} style={{ left: props.leftLocate, top: props.topLocate }}>
            <LinearGradient colors={['#0c5149', '#0c5149']} style={{ flex: 1, borderRadius: 16, opacity: 1 }}>
                <ImgClock borderRadius={15} source={require('./../../assets/imgTimeSound.png')} />
                <LabelClock>{props.labelTime}</LabelClock>
                <LabelDescriptionClock>MIN</LabelDescriptionClock>
            </LinearGradient>
        </GridClock>
  );
}

export default ClockOption;