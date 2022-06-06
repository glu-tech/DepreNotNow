import React from 'react';
import { ArrowBack, GridTitle, Title } from './styles';
import { MaterialIcon } from '../../components/Icon';

export function TitleLabel(props:{ text:string }) {
  return (
      <GridTitle>
          <ArrowBack> 
              <MaterialIcon size="large" color="#d8f0ed" name="arrow-left" /> 
          </ArrowBack>
          <Title>{props.text}</Title>
      </GridTitle>
  );
}

export default TitleLabel;