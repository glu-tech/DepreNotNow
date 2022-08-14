import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const WelcomeImage = styled.Image`
    position: absolute;
    width: ${RFValue(345)}px;
    height: ${RFValue(360)}px;
    left: ${RFValue(-6)}px;
    top: ${RFValue(22)}px;
`;

export const Title = styled.Text`
    position: absolute;
    height: ${RFValue(28)}px;
    left: ${RFValue(47)}px;
    right: ${RFValue(28)}px;
    bottom: ${RFValue(300)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: ${RFValue(28)}px;
    line-height: ${RFValue(28)}px;
    text-align: center;
    color: #D8F0ED;
`;

export const Subtitle = styled.Text`
    position: absolute;
    width: ${RFValue(190)}px;
    height: ${RFValue(55)}px;
    left: ${RFValue(69)}px;
    top: ${RFValue(397)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(19)}px;
    text-align: center;
    letter-spacing: ${RFValue(0.1)}px;
    color: rgba(216, 240, 237, 0.7);
`;

export const QuestionLabel = styled.Text`
    position: absolute;
    height: ${RFValue(16)}px;
    left: ${RFValue(28)}px;
    right: ${RFValue(46)}px;
    top: ${RFPercentage(9)}%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(15)}px;
    letter-spacing: ${RFValue(0.5)}px;
    color: rgba(9, 193, 132, 0.95);
`;

export const LineDividerInput = styled.View`
    position: absolute;
    width: ${RFValue(300)}px;
    height: ${RFValue(0)}px;
    left: ${RFValue(24)}px;
    top: ${RFValue(543)}px;
    opacity: 0.7;
    border: ${RFValue(1)}px solid #D8F0ED;
`;

export const InputName = styled.TextInput`
    position: absolute;
    height: ${RFValue(22)}px;
    left: ${RFValue(25)}px;
    right: ${RFValue(41)}px;
    top:  ${RFPercentage(9.442)}%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(24)}px;
    display: flex;
    align-items: center;
    letter-spacing: ${RFValue(0.5)}px;
    color: #D8F0ED;
`;