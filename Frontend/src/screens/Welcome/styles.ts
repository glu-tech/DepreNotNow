import styled from 'styled-components/native'

export const WelcomeImage = styled.Image`
    position: absolute;
    width: 399px;
    height: 420px;
    left: -10px;
    top: 26px;
`;

export const Title = styled.Text`
    position: absolute;
    height: 32px;
    left: 55px;
    right: 32px;
    bottom: 350px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    color: #D8F0ED;
`;

export const Subtitle = styled.Text`
    position: absolute;
    width: 220px;
    height: 65px;
    left: 78px;
    top: 460px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1px;
    color: rgba(216, 240, 237, 0.7);
`;

export const QuestionLabel = styled.Text`
    position: absolute;
    height: 16px;
    left: 28px;
    right: 46px;
    top: 71%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.7px;
    color: rgba(9, 193, 132, 0.95);
`;

export const LineDividerInput = styled.View`
    position: absolute;
    width: 350px;
    height: 0px;
    left: 24px;
    top: 630px;
    opacity: 0.7;
    border: 1px solid #D8F0ED;
`;

export const InputName = styled.TextInput`
    position: absolute;
    height: 24px;
    left: 28px;
    right: 41px;
    top: 74.6%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #D8F0ED;
`;