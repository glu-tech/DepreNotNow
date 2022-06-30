import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const GridPlayer = styled.View`
  display: flex;
  align-items: center;
  margin-top: ${RFValue(24)}px;
`;

export const TextContainer = styled.View`
  position: absolute;
  display: flex;
  text-align: center;
`;

export const MinutesLabel = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(48)}px;
  color: #d8f0ed;
`;

export const DescriptionLabel = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(24)}px;
  text-align: center;
  color: #d8f0ed;
  opacity: 0.8;
`;
