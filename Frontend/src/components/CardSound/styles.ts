import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
    position: absolute;
    width: 358px;
    height: 170px;
    left: 16px;
    border-radius: 16px;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
`;

export const SoundImage = styled.Image`
    position: absolute;
    width: 358px;
    height: 107px;
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1px;
    position: absolute;
    left: 26px;
    top: 112px;
`;

export const TitleHead = styled.Text`
    width: 297px;
    height: 26px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: #D8F0ED;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
`;

export const Subhead = styled.Text`
    width: 297px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;

export const EastCardGrid = styled.View`
    left: 85%;
    right: 8.33%;
    top: 75%;
    bottom: 60.5%;
`;