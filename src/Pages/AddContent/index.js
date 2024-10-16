import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, EditTitle, EditText, EditInput, EditButton, EditButtonText, Option, OptionText, Video } from './styles';
import { useNavigation } from '@react-navigation/native';

import Navbar from '../../Layout/Navbar';
import { WebView } from 'react-native-webview'

import { AuthContext } from '../../Contexts/auth'

export default function AddContent() {

    const { mode, videoToEdit, setVideoToEdit, changeURL, url, setUrl, editVideo, newVideo, setNewVideo, pushVideo } = useContext(AuthContext)
    const [html, setHTML] = useState('')

    const [title, setTitle] = useState('')
    const [localURL, setLocalURL] = useState('')
    const [curso, setCurso] = useState('Administração')

    const navigation = useNavigation()

    useEffect(() => {

        setHTML(`<iframe style='width: 100%; height: 99.5%' src='${!!!url && videoToEdit && videoToEdit.url ? videoToEdit.url : url}'/>`)

    }, [url])

    useEffect(() => {

        if(mode == "Edição"){

            setUrl(videoToEdit && videoToEdit.url? videoToEdit.url: "")

        }

    }, [])

    function formatUrl(url) {
        if (url.includes('/youtube.com/') && url.includes('/embed/')) {
            setUrl(url)
        } else {
            if (url.includes('watch?v=')) {
                let first = url.lastIndexOf('watch?v=') + 1
                let last = url.length - 1
                let id = url.slice(first, last)
                let newUrl = `https://youtube.com/embed/${id}`
                setUrl(newUrl)
            } else if (url.includes('/youtu.be/') && url.lastIndexOf('?si=')) {
                let first = url.lastIndexOf('/youtu.be/') + '/youtu.be/'.length
                let last = url.lastIndexOf('?si=')
                let id = url.slice(first, last)
                let newUrl = `https://youtube.com/embed/${id}`
                setUrl(newUrl)
            } else if (url.includes('/youtu.be/')) {
                let first = url.lastIndexOf('/youtu.be/') + '/youtu.be/'.length
                let last = url.length
                let id = url.slice(first, last)
                let newUrl = `https://youtube.com/embed/${id}`
                setUrl(newUrl)
            }
        }
    }

    function saveAndGoBack(){

        pushVideo(curso)
        navigation.navigate("Home")

    }

    return (
        <Container>

            <Navbar title={mode} />
            {mode == "Edição" ?
                <Box>

                    <EditTitle> Título </EditTitle>
                    <EditInput onChangeText={(newTitle) => {
                        setVideoToEdit((prevVideoToEdit) => ({
                            ...prevVideoToEdit,
                            title: newTitle,
                        }));
                    }}>{videoToEdit && videoToEdit.title}</EditInput>

                    <EditTitle> URL </EditTitle>
                    <EditInput onChangeText={setLocalURL}>{!!!url && videoToEdit && videoToEdit.url ? videoToEdit.url : url}</EditInput>
                    <EditButton margin={"0 0 0 0"} onPress={() => changeURL(localURL)}>

                        <EditButtonText> Confirmar URL </EditButtonText>

                    </EditButton>

                    <EditTitle> Video </EditTitle>
                    <Video source={{ html }} />

                    <EditButton onPress={editVideo}>

                        <EditButtonText> Salvar Alterações </EditButtonText>

                    </EditButton>

                </Box>
                :
                <Box>

                    <EditTitle> Título </EditTitle>
                    <EditInput onChangeText={(title) => {
                        setNewVideo((prevVideoToEdit) => ({
                            ...prevVideoToEdit,
                            title,
                        }));
                    }}>{title}</EditInput>

                    <EditTitle> URL </EditTitle>
                    <EditInput onChangeText={setLocalURL}>{!url? localURL: url}</EditInput>
                    <EditButton margin={"0 0 0 0"} onPress={() => formatUrl(localURL)}>

                        <EditButtonText> Confirmar URL </EditButtonText>

                    </EditButton>

                    <EditTitle> Video </EditTitle>
                    <Video source={{ html }} />

                    <EditText> Curso </EditText>

                    <Option selected={curso == "Administração"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Administração")}>

                        <OptionText selected={curso == "Administração"}> Administração </OptionText>

                    </Option>

                    <Option selected={curso == "Desenvolvimento de Sistemas"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Desenvolvimento de Sistemas")}>

                        <OptionText selected={curso == "Desenvolvimento de Sistemas"}> Desenvolvimento de Sistemas </OptionText>

                    </Option>

                    <Option selected={curso == "Marketing"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Marketing")}>

                        <OptionText selected={curso == "Marketing"}> Marketing </OptionText>

                    </Option>

                    <Option selected={curso == "Intercurso"} style={{ borderColor: "rgba(255, 195, 40, 1);", width: "100%" }} onPress={() => setCurso("Intercurso")}>

                        <OptionText selected={curso == "Intercurso"}> Intercurso </OptionText>

                    </Option>

                    <EditButton onPress={() => {
                        pushVideo(curso)
                        navigation.navigate("Home")    
                    }}>

                        <EditButtonText> Salvar Alterações </EditButtonText>

                    </EditButton>

                </Box>
            }

        </Container >
    );
}