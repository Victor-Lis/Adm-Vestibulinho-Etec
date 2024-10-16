import React, { useContext, useEffect, useState } from 'react';
import { EditScrollView, EditUserContainer, EditUserTitle, EditUserText, EditUserButton, EditUserInput, EditUserButtonText, AreaInputPassword, ButtonPassword, InputPassword, ButtonIcon, ButtonImage, Option, OptionText } from './styles';
import { AuthContext } from '../../Contexts/auth';

import Feather from 'react-native-vector-icons/Feather';

import * as ImagePicker from 'expo-image-picker';

export default function EditUser() {

    const { user, updateDatas, setMode } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')
    const [senha, setSenha] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {

        setNome(user.nome)
        setEmail(user.email)
        setCurso(user.curso)
        setSenha(user.senha)

    }, [])

    function handleEdit() {

        if (email && senha && curso && nome) {

            updateDatas(email, senha, curso, nome)

        }

    }

    return (
        <EditScrollView>
            <EditUserContainer>
                <EditUserTitle> Editar Perfil </EditUserTitle>
                <EditUserText> Nome </EditUserText>
                <EditUserInput
                    placeholder='Seu nome'
                    onChangeText={setNome}
                    value={nome}
                />
                <EditUserText> Email </EditUserText>
                <EditUserInput
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                    editable={false}
                    color="#bfbfbf"
                />
                <EditUserText> Senha </EditUserText>
                <AreaInputPassword>

                    <InputPassword

                        placeholder={showPassword ? "Sua Senha" : "*********"}
                        value={senha}
                        onChangeText={(txt) => setSenha(txt)}
                        secureTextEntry={!showPassword}
                        editable={false}
                        color="#bfbfbf"

                    />

                    <ButtonPassword onPress={() => setShowPassword(!showPassword)}>

                        {showPassword ? <Feather name="eye-off" color={'rgba(255, 195, 40, 1)'} size={25} style={{ alignSelf: "center" }} /> : <Feather name="eye" color={'rgba(255, 195, 40, 1)'} size={25} style={{ alignSelf: "center" }} />}

                    </ButtonPassword>

                </AreaInputPassword>
                <EditUserText> Curso </EditUserText>

                <Option selected={curso == "Administração"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Administração")}>

                    <OptionText selected={curso == "Administração"}> Administração </OptionText>

                </Option>

                <Option selected={curso == "Desenvolvimento de Sistemas"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Desenvolvimento de Sistemas")}>

                    <OptionText selected={curso == "Desenvolvimento de Sistemas"}> Desenvolvimento de Sistemas </OptionText>

                </Option>

                <Option selected={curso == "Marketing"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Marketing")}>

                    <OptionText selected={curso == "Marketing"}> Marketing </OptionText>

                </Option>

                <EditUserButton onPress={() => handleEdit()}>
                    <EditUserButtonText> Salvar Alterações </EditUserButtonText>
                </EditUserButton>
            </EditUserContainer>
        </EditScrollView>
    );
}
