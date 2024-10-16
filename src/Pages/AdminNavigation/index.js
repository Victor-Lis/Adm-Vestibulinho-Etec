import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Background, IconsBox, Button, Icon, IconText } from './styles';
import { useNavigation } from '@react-navigation/native';

// import Admin from '../../../assets/Admin.png'
// import UsersList from '../../../assets/Users.png'

import Navbar from '../../Layout/Navbar';

export default function AdminNavigation() {

    const navigation = useNavigation()

    return (
        <Background>

            <Navbar title="Admin Home"/>

            <IconsBox>
                <Button onPress={() => navigation.navigate("UsersList")}>

                    <Icon name="list" color={"#ffc300"} size={100}/>
                    <IconText> Usuários </IconText>

                </Button>
                <Button onPress={() => navigation.navigate("AddUser")}>

                    <Icon name="user-plus" color={"#ffc300"} size={100}/>
                    <IconText> Adicionar </IconText>

                </Button>
            </IconsBox>
            
        </Background>
    );
}