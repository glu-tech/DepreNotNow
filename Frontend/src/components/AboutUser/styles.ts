import styled from 'styled-components/native'

export const ImgBackgroundProfile = styled.Image`
    position: absolute;
    width: 360px;
    height: 100px;
    top: 1px;
`;

export const ImgProfile = styled.Image`
    position: absolute;
    width: 60px;
    height: 60px;
    left: 20px;
    top: 120px;
`;

export const ProfileName = styled.Text`
    position: absolute;
    left: 100px;
    top: 140px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.7px;
    color: #D8F0ED;
`;

export const Logout = styled.TouchableOpacity`
    position: absolute;
    left: 320px;
    top: 135px;
`;