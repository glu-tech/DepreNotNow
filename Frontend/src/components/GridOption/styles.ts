import styled from "styled-components/native";

export const Grid = styled.TouchableOpacity`
    position: absolute;
    height: 48px;
    left: 22px;
    right: 25px;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
`;

export const Label = styled.Text`
    position: absolute;
    left: 37px;
    right: 16px;
    top: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #D8F0ED;
`;