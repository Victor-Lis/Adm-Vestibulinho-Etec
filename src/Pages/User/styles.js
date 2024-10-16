import Feather from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #222222;
  flex: 1;
  padding-top: 10%;
`;

export const ContentContainer = styled.View`

  background-color: #282828;
  width: 90%;
  height: 85%;
  border: 5px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin: auto;
  align-items: center;
  justify-content: center;

`

export const UserName = styled.Text`

  color: rgba(255, 195, 40, 1);
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 120px;

`

export const ContentText = styled.Text`

  border: 2px solid rgba(255, 255, 255, 1);
  font-size: 16px;
  color: rgba(255, 195, 40, 1);
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  margin: 8px 0;

`

export const SignOutBox = styled.TouchableOpacity`

  background-color: rgba(255, 0, 0, 0.9);
  border-radius: 10px;
  padding: 10px 25px;
  text-align: center;
  margin-top: 190px;

`

export const SignOutText = styled.Text`

  color: #fff;
  font-weight: bold;

`