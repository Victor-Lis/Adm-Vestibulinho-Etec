import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, Video, Title, UploadedBy, EditBox, Confirm, ConfirmBox, ConfirmBoxText, ConfirmBoxRow } from './styles'
import { WebView } from 'react-native-webview'
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../../Contexts/auth'
import { useNavigation } from '@react-navigation/native';

export default function Card({ url, title, uploadedBy, index, categorie }) {

    const [html, setHTML] = useState('')
    const [deleteVisible, setDeleteVisible] = useState(false)

    const { changeMode, deleteVideo } = useContext(AuthContext)

    const navigation = useNavigation()

    useEffect(() => {

        if (url) {

            setHTML(`<iframe width='100%' height='100%' src='${url}'/>`)

        }

    }, [])

    function edit() {

        changeMode(categorie, index, url, title, uploadedBy, "Edição")
        navigation.navigate("AddContent")

    }   

    function confirmDelete(){

        deleteVideo(categorie, index)
        setDeleteVisible(false)    

    }

    return (
        <Container>

            <WebView source={{ html }} />
            <Title>{title && title}</Title>
            <UploadedBy>Enviado por: {uploadedBy && uploadedBy}</UploadedBy>
            <EditBox>

                <TouchableOpacity onPress={edit}>

                    <Feather name="edit" color={"rgba(255, 215, 40, 1)"} size={27} style={{ marginRight: 10 }} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteVisible(true)}>

                    <Feather name="trash" color={"rgba(255, 25, 40, 1)"} size={27} style={{ marginRight: 10 }} />

                </TouchableOpacity>

            </EditBox>

            <Confirm
                animationType='slide'
                transparent={true}
                visible={deleteVisible}
            >

                <ConfirmBox>

                    <ConfirmBoxText>Você tem certeza que quer continuar?</ConfirmBoxText>

                    <ConfirmBoxRow>

                        <TouchableOpacity onPress={() => setDeleteVisible(false)}>

                            <Text style={{ color: "green" }}> Cancelar </Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={confirmDelete}>

                            <Text style={{ color: "red" }}> Continuar </Text>

                        </TouchableOpacity>

                    </ConfirmBoxRow>

                </ConfirmBox>

            </Confirm>

        </Container>
    );
}