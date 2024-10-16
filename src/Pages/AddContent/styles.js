import WebView from 'react-native-webview';
import styled from 'styled-components/native'

export const Container = styled.ScrollView`

    flex: 1;
    background-color: #202020;
    margin-top: 35px;

`

export const Box = styled.View`

    width: 90%;
    margin: 0 5%;

`

export const EditTitle = styled.Text`
    margin: 20px 0 5px 0;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`;

export const EditText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;

export const Video = styled(WebView)`

    width: 100%;
    height: 225px;
    border-radius: 100px;
    background: #fff;
    overflow: hidden;

`

export const EditInput = styled.TextInput`
  background-color: #fff;
  padding: 10px;
  color: ${props => props.color ? props.color : "#151515"}
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

    color: ${props => props.selected? "rgba(255, 195, 40, 1)": "#fff"};

`

export const EditButton = styled.TouchableOpacity`
  background-color: #151515;
  padding: 10px;
  border-radius: 5px;
  margin: ${props => props.margin? props.margin : "10px 0 20px 0"};
`;

export const EditButtonText = styled.Text`
  color: rgba(255, 195, 40, 1);
  font-size: 18px;
  text-align: center;
`;