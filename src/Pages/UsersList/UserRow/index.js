import React, { useState, useContext } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { View, Text, TouchableOpacity } from 'react-native'

import { Card, CardContent, CardASide, CardTitle, CardText, CardPasswordRow, CardPasswordIcon } from './styles'

import { AuthContext } from '../../../Contexts/auth'

export default function UserRow({user}) {

    //"cargo", "curso", "email", "nome", "senha", "uid"
    const { nome, email, senha, uid, cargo, curso } = user
    const [showPassword, setShowPassword] = useState(false)

    const { userDelete } = useContext(AuthContext)

 return (
   <Card>

        <CardContent>

            <CardTitle> Informações Pessoais </CardTitle>
            <CardText> {nome} </CardText>
            <CardText> {email} </CardText>
            <CardPasswordRow onPress={() => setShowPassword(!showPassword)}>

                <CardText> {showPassword? senha : "******"} </CardText>
                <CardPasswordIcon>

                    {showPassword? <Feather name="eye-off" color="rgba(255, 195, 40, 1)" size={25}/>: <Feather name="eye" color="rgba(255, 195, 40, 1)" size={25}/>}

                </CardPasswordIcon>

            </CardPasswordRow>

            <CardTitle style={{marginTop: 20}}> Curso </CardTitle>
            <CardText> {curso} </CardText>

            <CardTitle style={{marginTop: 20}}> Cargo </CardTitle>
            <CardText> {cargo == "user"? "Usuário": "Administrador"} </CardText>

        </CardContent>

        {/* <CardASide>

            <TouchableOpacity style={{padding: 2}} onPress={() => {userDelete(uid)}}>

                <Feather name="trash" color="rgb(255, 25, 40)" size={25}/>

            </TouchableOpacity>

        </CardASide> */}

   </Card>
  );
}