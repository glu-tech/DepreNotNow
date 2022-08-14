import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Grid = styled.TouchableOpacity`
    width: ${RFValue(309)}px;
    height: ${RFValue(145)}px;
    border-radius: ${RFValue(15)}px;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
`;

export const SoundImage = styled.Image`
    position: absolute;
    width: ${RFValue(309)}px;
    height: ${RFValue(92)}px;
    border-top-right-radius: ${RFValue(16)}px;
    border-top-left-radius: ${RFValue(16)}px;
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${RFValue(0)}px;
    gap: ${RFValue(1)}px;
    position: absolute;
    left: ${RFValue(22)}px;
    top: ${RFValue(96)}px;
`;

export const TitleHead = styled.Text`
    width: ${RFValue(267)}px;
    height: ${RFValue(22)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(27)}px;
    letter-spacing: ${RFValue(0.1)}px;
    color: #D8F0ED;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
`;

export const Subhead = styled.Text`
    width: ${RFValue(267)}px;
    height: ${RFValue(20)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: ${RFValue(10)}px;
    line-height: ${RFValue(17)}px;
    letter-spacing: ${RFValue(0.3)}px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;

export const EastCardGrid = styled.View`
    left: ${RFPercentage(10.8)}%;
    right: ${RFPercentage(5.33)}%;
    top: ${RFPercentage(9.5)}%;
    bottom: ${RFPercentage(5.5)}%;
`;