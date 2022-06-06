import styled from 'styled-components/native'

export const CancelButton = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;
    position: absolute;
    width: 178px;
    height: 40px;
    left: 103px;
    top: 450px;
    border: 1px solid #D8F0ED;
    border-radius: 100px;
`;

export const CancelLabel = styled.Text`
    width: 57px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    color: #D8F0ED;
    flex: none;
    flex-grow: 0;
`;