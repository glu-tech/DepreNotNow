import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const SubmitName = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(10)}px ${RFValue(24)}px;
    gap: ${RFValue(10)}px;
    position: absolute;
    width: ${RFValue(269)}px;
    height: ${RFValue(35)}px;
    background: #0A8967;
    border-radius: ${RFValue(100)}px;
`;

export const SubmitLabel = styled.Text`
    width: ${RFValue(100)}px;
    height: ${RFValue(16)}px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: ${RFValue(0.4)}px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;