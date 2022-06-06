import React from 'react';
import ClockOption from '../../components/ClockOption';
import { View } from 'react-native';

export function GridOptionsClock() {
  return (
        <View>
            <ClockOption topLocate={50} leftLocate={25} labelTime={"5"} />
            <ClockOption topLocate={50} leftLocate={138} labelTime={"15"} />
            <ClockOption topLocate={50} leftLocate={251} labelTime={"30"} />

            <ClockOption topLocate={168} leftLocate={25} labelTime={"45"} />
            <ClockOption topLocate={168} leftLocate={138} labelTime={"60"} />
            <ClockOption topLocate={168} leftLocate={251} labelTime={"120"} />
        </View>
  );
}

export default GridOptionsClock;