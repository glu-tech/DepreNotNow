import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Title = styled.Text`
    position: absolute;
    top: ${RFValue(138)}px;
    height: ${RFValue(29)}px;
    left: ${RFValue(20)}px;
    right: ${RFValue(28)}px;
    bottom: ${RFValue(680)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: ${RFValue(22)}px;
    line-height: ${RFValue(28)}px;
    color: #D8F0ED;
`;

export const ButtonNext = styled.TouchableOpacity`
    left: ${RFValue(153)}px;
    position: absolute;
    top: ${RFValue(345)}px;
`;

export const ButtonFelling = styled.TouchableOpacity`
    position: absolute;
    top: ${RFValue(258)}px; 
`;

export const LabelFelling = styled.Text`
    font-size: ${RFValue(17)}px;
    width: ${RFValue(35)}px;
`;