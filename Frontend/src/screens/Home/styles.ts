import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Title = styled.Text`
    position: absolute;
    height: ${RFValue(28)}px;
    left: ${RFValue(20)}px;
    right: ${RFValue(28)}px;
    bottom: ${RFValue(550)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: ${RFValue(19)}px;
    line-height: ${RFValue(30)}px;
    color: #D8F0ED;
`;