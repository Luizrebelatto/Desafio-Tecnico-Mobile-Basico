import styled from 'styled-components/native';

export const Wrapper = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    flex:1;
    align-items: center;
    justify-content: flex-end;
`;

export const ModalArea = styled.View`
    height: 70%;
    width: 90%;
    background-color: #041c02;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const Button = styled.TouchableOpacity`
    background-color:#28a81d;
    padding: 10px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
`
export const ModalText = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-bottom: 8px;
    margin-left: 10px;
`
export const AreaContent = styled.View`
    flex-direction: row;
`

export const TitleContent = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-bottom: 8px;
    margin-left: 10px;
    font-weight: bold;
`
