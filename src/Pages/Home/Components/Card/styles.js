import styled from "styled-components/native";
import { WebView } from 'react-native-webview'

export const Container = styled.View`

    width: 400px;
    border: 1px solid #fff;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 10px;

`

export const Video = styled(WebView)`

    background: blue;

`

export const Title = styled.Text`

    width: 97%;
    margin: 0px 1.5% 1.5px 1.5%;

    color: rgba(255, 195, 40, 1);
    font-size: 20px;

`

export const UploadedBy = styled.Text`

    width: 95%;
    margin: 0px 2.5% 5px 2.5%;;

    color: #fff;
    font-size: 15px;

`

export const EditBox = styled.View`

    flex-direction: row;
    width: 99%;
    padding: 0 .5% 1.5% .5%;
    align-items: center;
    justify-content: flex-end;

`

export const Confirm = styled.Modal`

    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

`

export const ConfirmBox = styled.View`

    margin: 65% 10%;
    width: 80%;
    height: 20%;
    background: #fff;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

`

export const ConfirmBoxText = styled.Text`

    margin-top: 8%;
    color: #1e1e1e;
    width: 95%;
    text-align: center;

`

export const ConfirmBoxRow = styled.View`

    width: 100%;
    height: 30%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2%;

`
