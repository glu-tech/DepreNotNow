import React from 'react';
import { View } from 'react-native';
import { ZoneZero, ZoneOne, ZoneTwo, Description, BadgeUseDays } from './styles';

interface props {
  description:string
}

export function UseDaysLayoutZone(props:props) {
  return (
    <View>
        <ZoneZero></ZoneZero>
        <ZoneOne></ZoneOne>
        <ZoneTwo></ZoneTwo>
        <Description>{props.description}</Description>
        <BadgeUseDays source={require('./../../assets/imgBadgeUseDays.png')}></BadgeUseDays>
    </View>
  );
}

export default UseDaysLayoutZone;