import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Background = styled.View`

    flex: 1;
    background-color: #202020;

`

export const Container = styled.ScrollView`

    flex: 1;

`

export const EditScrollView = styled.ScrollView`

    flex: 1;

`

export const EditUserContainer = styled.View`
    padding: 20px;
`;

export const EditUserTitle = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`;

export const EditUserText = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 12.5px;
    margin-bottom: 5px;
`;

export const AreaInputPassword = styled.View`
  
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  
`

export const InputPassword = styled.TextInput`

    background-color: #FFF;
    width: 85%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: ${props => props.color ? props.color : "#121212"};
    margin-right: 1%;

`

export const ButtonPassword = styled.TouchableOpacity   `

    width: 13.5%;
    height: 50px;
    border-radius: 8px;
    background-color: #121212;
    align-items: center;
    justify-content: center;

`

export const EditUserInput = styled.TextInput`
 
 background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    color: ${props => props.color ? props.color : "#151515"}

`;

export const EditUserButton = styled.TouchableOpacity`
    background-color: #151515;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const EditUserButtonText = styled.Text`
    color: rgba(255, 195, 40, 1);
    font-size: 18px;
    text-align: center;
`;

export const Option = styled.TouchableOpacity`

    background-color: ${props => props.selected ? "#151515" : "transparent"};
    width: 90%;
    font-size: 17px;
    padding: 12px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
    border: 2px solid ${props => props.selected ? "" : "rgba(255, 195, 40, 1)"};

`

export const OptionText = styled.Text`

    color: ${props => props.selected ? "#fff" : "#fff"};

`