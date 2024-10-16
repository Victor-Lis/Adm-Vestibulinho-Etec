import React, { useState, useContext, useEffect } from 'react';
import { Background, Container, EditScrollView, EditUserContainer, EditUserTitle, EditUserText, EditUserButton, EditUserInput, EditUserButtonText, AreaInputPassword, ButtonPassword, InputPassword, ButtonIcon, ButtonImage, Option, OptionText } from './styles';
import { ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexts/auth'

import Feather from 'react-native-vector-icons/Feather';

import Navbar from '../../Layout/Navbar';

export default function AddUser() {

  const { createUser } = useContext(AuthContext)
  const navigation = useNavigation()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [curso, setCurso] = useState('')
  const [senha, setSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [cargo, setCargo] = useState('')

  async function submit() {
    let status = createUser(email, senha, nome, curso, cargo)
    if (status) {

      setNome('')
      setEmail('')
      setCurso('')
      setSenha('')
      setShowPassword(false)
      setCargo('')

      ToastAndroid.show('Usuário criado com sucesso!', ToastAndroid.LONG);
      navigation.goBack()

    }
  }

  return (

    <Background>
      {/* <Navbar title="Adiconar Usuario"/> */}
      <Container>
        <EditScrollView>
          <EditUserContainer>
            <EditUserTitle> Perfil </EditUserTitle>
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
            />
            <EditUserText> Senha </EditUserText>
            <AreaInputPassword>

              <InputPassword
                placeholder={showPassword ? "Sua Senha" : "*********"}
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
                secureTextEntry={!showPassword}
              />

              <ButtonPassword onPress={() => setShowPassword(!showPassword)}>

                {showPassword ? <Feather name="eye-off" color={'rgba(255, 195, 40, 1)'} size={25} style={{ alignSelf: "center" }} /> : <Feather name="eye" color={'rgba(255, 195, 40, 1)'} size={25} style={{ alignSelf: "center" }} />}

              </ButtonPassword>

            </AreaInputPassword>

            <EditUserText> Curso </EditUserText>

            <Option selected={curso == "Administração"} style={[curso == "Administração" ? { borderColor: "rgba(255, 195, 40, 1);", width: "100%" } : { borderColor: "rgba(255, 255, 255, 1);", width: "100%" }]} onPress={() => setCurso("Administração")}>

              <OptionText selected={curso == "Administração"}> Administração </OptionText>

            </Option>

            <Option selected={curso == "Desenvolvimento de Sistemas"} style={[curso == "Desenvolvimento de Sistemas" ? { borderColor: "rgba(255, 195, 40, 1);", width: "100%" } : { borderColor: "rgba(255, 255, 255, 1);", width: "100%" }]} onPress={() => setCurso("Desenvolvimento de Sistemas")}>

              <OptionText selected={curso == "Desenvolvimento de Sistemas"}> Desenvolvimento de Sistemas </OptionText>

            </Option>

            <Option selected={curso == "Marketing"} style={[curso == "Marketing" ? { borderColor: "rgba(255, 195, 40, 1);", width: "100%" } : { borderColor: "rgba(255, 255, 255, 1);", width: "100%" }]} onPress={() => setCurso("Marketing")}>

              <OptionText selected={curso == "Marketing"}> Marketing </OptionText>

            </Option>

            <EditUserText> Cargo </EditUserText>

            <Option selected={cargo == "usuario"} style={[cargo == "usuario" ? { borderColor: "rgba(255, 195, 40, 1);", width: "100%" } : { borderColor: "rgba(255, 255, 255, 1);", width: "100%" }]} onPress={() => setCargo("usuario")}>

              <OptionText selected={cargo == "usuario"}> Usuário </OptionText>

            </Option>

            <Option selected={cargo == "administrador"} style={[cargo == "administrador" ? { borderColor: "rgba(255, 195, 40, 1);", width: "100%" } : { borderColor: "rgba(255, 255, 255, 1);", width: "100%" }]} onPress={() => setCargo("administrador")}>

              <OptionText selected={cargo == "administrador"}> Administrador </OptionText>

            </Option>

            <EditUserButton onPress={() => submit()}>
              <EditUserButtonText> Salvar Alterações </EditUserButtonText>
            </EditUserButton>
          </EditUserContainer>
        </EditScrollView>
      </Container>
    </Background>
  );
}