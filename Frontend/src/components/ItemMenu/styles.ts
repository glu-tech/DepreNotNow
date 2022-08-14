import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${RFValue(0)}px;
    gap: ${RFValue(4)}px;
    position: absolute;
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    top: ${RFValue(690)}px;
`;

export const ButtonGrid = styled.TouchableOpacity`
    width: ${RFValue(48)}px;
    height: ${RFValue(28)}px;
    border-radius: ${RFValue(90)}px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Box = styled.View`
    position: absolute;
    left: ${RFPercentage(3.57)}%;
    right: ${RFPercentage(3.57)}%;
    top: ${RFPercentage(2)}%;
    bottom: ${RFPercentage(2)}%;
`;

export const Label = styled.Text`
    width: ${RFValue(50)}px;
    height: ${RFValue(12)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(15)}px;
    text-align: center;
    letter-spacing: ${RFValue(0.5)}px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;

export const PlayerIcon = styled.View`
    box-sizing: border-box;
    position: absolute;
    left: ${RFPercentage(3.47)}%;
    right: ${RFPercentage(3.47)}%;
    top: ${RFPercentage(3.47)}%;
    bottom: ${RFPercentage(3.47)}%;
    border: ${RFValue(2)}px solid #D8F0ED;
    border-radius: ${RFValue(100)}px;
`;