import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexts/auth';
import { NavbarContainer, NavbarTitle, NavbarEdit } from './styles'
import Feather from 'react-native-vector-icons/Feather';

export default function Navbar({ title, navigateTo }) {

    const { user, mode, changeMode } = useContext(AuthContext)
    const navigation = useNavigation()

    return (
        <NavbarContainer>

            <NavbarTitle> {title ? title : ""} </NavbarTitle>

            {!!navigateTo &&

                <NavbarEdit onPress={() => navigation.navigate(navigateTo)}>

                    <Feather name="edit-3" color={'rgba(255, 255,255, 1)'} size={30} />

                </NavbarEdit>

            }

            {title == mode && mode == "Edição" && 
            
                <NavbarEdit onPress={changeMode}>

                    <NavbarTitle style={{ color: "rgba(200,0,0,1)" }}> Cancelar {mode ? mode : ""} </NavbarTitle>

                </NavbarEdit>

            }

        </NavbarContainer>
    );
}