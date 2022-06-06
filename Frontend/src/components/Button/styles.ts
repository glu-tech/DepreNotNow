import styled from 'styled-components/native'

export const SubmitName = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 10px;
    position: absolute;
    width: 312px;
    height: 40px;
    background: #0A8967;
    border-radius: 100px;
`;

export const SubmitLabel = styled.Text`
    width: 100px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;