import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex:1;
`;

export const Card = styled.View`
    background-color: #b5edaf;
    margin: 15px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #000;
`
export const DataContainer = styled.View`
    flex-direction: row;
`
export const DataTitle = styled.Text`
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
`
export const DataValue = styled.Text`
    padding: 15px;
    font-size: 18px;
`
export const ButtonArea = styled.View`
    align-items:flex-end;
    margin-top: -45px;
`
export const Button = styled.TouchableOpacity`
    background-color: #28a81d;
    opacity: 1;
    padding: 8px;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
`
export const ButtonText = styled.Text`
        color: #fff;
        text-align: center;
`
export const Modal = styled.Modal``

export const FlatList = styled.FlatList``