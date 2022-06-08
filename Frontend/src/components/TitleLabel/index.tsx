import React from 'react';
import { ArrowBack, GridTitle, Title } from './styles';
import { MaterialIcon } from '../../components/Icon';

interface props {
    text:string,
    onPress:any
}

export function TitleLabel(props:props) {
  return (
      <GridTitle>
          <ArrowBack onPress={props.onPress}> 
              <MaterialIcon size="large" color="#d8f0ed" name="arrow-left" /> 
          </ArrowBack>
          <Title>{props.text}</Title>
      </GridTitle>
  );
}

export default TitleLabel;