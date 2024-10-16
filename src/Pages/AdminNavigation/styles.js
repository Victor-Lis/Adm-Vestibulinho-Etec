import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Background = styled.View`

    margin-top: 35px;
    flex: 1;
    background-color: #202020;

`

export const IconsBox = styled.View`

    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;

`

export const Button = styled.TouchableOpacity`

    border: 5px solid #fff;
    border-radius: 10px;
    margin: 10px;

`

export const Icon = styled(Feather)`

    margin: 15px 30px 10px 30px;
    /* color: #ffc300; */

`

export const IconText = styled.Text`
    
    margin-bottom: 25px;
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 18.5px;

`