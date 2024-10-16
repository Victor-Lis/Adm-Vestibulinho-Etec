import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Card = styled.View`

    width: 88%;
    padding: 10px 2%;
    border: 2px solid #fff;
    border-radius: 10px;
    margin: 3% 5%;
    display: flex;
    flex-direction: row;

`

export const CardContent = styled.View`

    width: 90%;
    /* background-color: #fff; */

`

export const CardASide = styled.View`

    width: 10%;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */

`

export const CardTitle = styled.Text`

    color: rgba(255, 195, 40, 1);

`

export const CardText = styled.Text`

    color: #fff;
    /* text-transform: ${props => props.transform ? props.transform : "none"}; */
    margin: 2.5px 0;

`

export const CardPasswordRow = styled.TouchableOpacity`

    /* background: #000; */
    width: 110%;
    flex-direction: row;
    justify-content: space-between;

`

export const CardPasswordIcon = styled.View`

    align-items: center;
    justify-self: center;

`