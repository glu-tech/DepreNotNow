import styled from 'styled-components/native';

export const GridClock = styled.TouchableOpacity`
    position: absolute;
    width: 98px;
    height: 98px;
    opacity: 0.6;
    border-radius: 16px;
`;

export const ImgClock = styled.Image`
    width: 98px;
    height: 98px;
    background-color: #0A1422;
    opacity: 0.6;
`;

export const LabelClock = styled.Text`
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    top: -75%;
    color: #D8F0ED;
`;

export const LabelDescriptionClock = styled.Text`
    position: relative;
    top: -70%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #D8F0ED;
    opacity: 0.5;
`;