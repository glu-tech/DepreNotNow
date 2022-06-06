import React from 'react';
import { View } from 'react-native';
import { SubmitLabel, SubmitName } from './styles';

export function Submit(props:any) {
  return (
    <View>
        <SubmitName
          style={ props.style }
          onPress={props.onPress}> 
            <SubmitLabel>{props.label}</SubmitLabel>
        </SubmitName>
    </View>
  );
}

export default Submit;