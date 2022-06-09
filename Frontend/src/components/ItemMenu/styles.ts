import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    position: absolute;
    width: 56px;
    height: 56px;
    top: 800px;
`;

export const ButtonGrid = styled.TouchableOpacity`
    width: 56px;
    height: 32px;
    border-radius: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Box = styled.View`
    position: absolute;
    left: 28.57%;
    right: 28.57%;
    top: 12.5%;
    bottom: 12.5%;
`;

export const Label = styled.Text`
    width: 56px;
    height: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;

export const PlayerIcon = styled.View`
    box-sizing: border-box;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    border: 2px solid #D8F0ED;
    border-radius: 100px;
`;