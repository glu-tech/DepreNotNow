import styled from 'styled-components/native'

export const Container = styled.View`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1px;
    width: 138px;
    height: 47px;
    left: 22px;
    top: 220px;
`;

export const Title = styled.Text`
    width: 150px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;

export const Description = styled.Text`
    width: 138px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.1px;
    color: #D8F0ED;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
`;