import React, { createContext, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firebaseConfig } from '../Services/firebaseConfig'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateEmail, updatePassword, deleteUser } from 'firebase/auth';
import { getDatabase, ref, get, set, push, update } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app)
export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [videos, setVideos] = useState([])
    const [keys, setKeys] = useState([])
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [url, setUrl] = useState('')
    const [mode, setMode] = useState('Criação')
    const [videoToEdit, setVideoToEdit] = useState({})
    const [newVideo, setNewVideo] = useState({})
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function loadStorage() {
            setLoading(true)
            let userID = await AsyncStorage.getItem("@user_adm_vestibulinho_etec")

            if (!!userID) {
                const userRef = ref(database, `usuarios/${userID}`);
                get(userRef).then((snapshot) => {
                    let userDatas = snapshot.val();
                    setUser(userDatas);
                    setUser((oldUser) => ({ ...oldUser, uid: userID }))
                });
            }
            setLoading(false)
        }

        getVideos()
        getUsers()
        loadStorage()

    }, [])


    async function signUp(email, nome, password, curso) {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);

            await set(userRef, {

                email: email,
                nome: nome,
                senha: password,
                curso,

            }).then(async () => {

                await get(userRef).then(async (snapshot) => {

                    let userDatas = snapshot.val()
                    setUser(userDatas)

                })
                let uid = user.user.uid
                await AsyncStorage.setItem('@user_adm_vestibulinho_etec', uid)

            })

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function signIn(email, password) {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);
            await get(userRef).then(async (snapshot) => {

                let userDatas = snapshot.val()
                setUser(userDatas)

            }) 
            let uid = user.user.uid
            setUser((oldUser) => ({ ...oldUser, uid }))
            await AsyncStorage.setItem('@user_adm_vestibulinho_etec', uid)

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function updateDatas(email, password, curso, nome) {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);

            // if (!!newEmail) {

            //     await updateEmail(auth.currentUser , newEmail)

            // }

            // if (!!newPassword) {

            //     await updatePassword(user.user.uid, newPassword)

            // }

            await update(userRef, {

                email: email,
                nome: nome,
                senha: password,
                curso,

            }).then(async () => {

                await get(userRef).then(async (snapshot) => {

                    let userDatas = snapshot.val()
                    setUser(userDatas)
                    let uid = user.user.uid
                    await AsyncStorage.setItem('@user_adm_vestibulinho_etec', uid)

                })

            })

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function getVideos() {

        const videosRef = ref(database, `videos/`);

        await get(videosRef).then(async (snapshot) => {

            let data = await snapshot.val()

            if (data) {
                let keys = Object.keys(data)
                keys = keys.filter(key => key != "Intercurso")
                keys.push("Intercurso")
                setKeys(keys)
                keys.map(key => {
                    let childKeys = Object.keys(data[key])
                    let array = []
                    childKeys.map(childKey => {
                        array.push(data[key][childKey])
                    })
                    data[key] = array
                })
                setVideos(data)
            }
        })

    }

    function changeMode(categorie, index, url, title, uploadedBy, configMode) {

        if (mode == "Criação") {

            setMode("Edição")
            setVideoToEdit({
                categorie,
                index,
                url,
                title,
                uploadedBy
            })
            return

        } else if (mode == "Edição" && !!!configMode) {

            setMode("Criação")
            setVideoToEdit()
            setUrl('')

        } else if (mode == "Edição" && !!configMode) {

            setMode("Edição")
            setVideoToEdit({
                categorie,
                index,
                url,
                title,
                uploadedBy
            })
            return

        }

    }

    async function editVideo(categorie, index) {

        // categorie,
        // index,
        // url,
        // title,
        // uploadedBy
        const videosRef = ref(database, `videos/${videoToEdit.categorie}/`);
        let dataObj = {

            title: videoToEdit.title,
            url,
            uploadedBy: user.nome,

        }

        let array = videos[videoToEdit.categorie]
        array.splice(videoToEdit.index, 1, dataObj)

        await set(videosRef, array)
            .then((snapshot) => {

                getVideos()
                changeMode()

            })

    }

    async function deleteVideo(categorie, index) {

        const videosRef = ref(database, `videos/${categorie}/`);

        let array = videos[categorie]
        if (array.length > 1) {
            array.splice(index, 1)
        }

        await set(videosRef, array)
            .then((snapshot) => {

                getVideos()

            })

    }

    async function pushVideo(curso) {

        // categorie,
        // index,
        // url,
        // title,
        // uploadedBy

        const courses = {

            "Administração": "ADM",
            "Desenvolvimento de Sistemas": "DS",
            "Marketing": "MKT",
            "Intercurso": "Intercurso"

        }

        if (newVideo.title && url) {
            const videosRef = ref(database, `videos/${courses[curso]}`);
            let dataObj = {

                title: newVideo.title,
                url,
                uploadedBy: user.nome,

            }

            let array = videos[courses[curso]]
            array.push(dataObj)

            await set(videosRef, array)
                .then((snapshot) => {

                    getVideos()

                })
        }

    }

    function changeURL(url) {
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

    async function getUsers() {

        const usersRef = ref(database, `usuarios/`);

        await get(usersRef).then(async (snapshot) => {

            let data = await snapshot.val()

            if (data) {
                let keys = Object.keys(data)
                let newData = keys.map((key) => {

                    let objData = data[key]
                    objData["uid"] = key
                    return objData

                })
                newData = newData.sort((a, b) => a.nome.localeCompare(b.nome))
                // console.log(newData)
                setUsers(newData)
            }
        })

    }

    async function createUser(email, password, nome, curso, cargo) {

        const cargoFormat = {

            "administrador": "adm",
            "usuario": "user",

        }

        if (!!email && !!password && !!nome && !!curso && !!cargo) {

            let valueToReturn = false;

            await createUserWithEmailAndPassword(auth, email, password).then(async (user) => {

                const userRef = ref(database, `usuarios/${user.user.uid}`);

                await set(userRef, {

                    email,
                    nome,
                    senha: password,
                    curso,
                    cargo: cargoFormat[cargo],

                }).then(() => {
                    getUsers()
                    valueToReturn = true
                })

            })
                .catch(e => {

                    console.log("Error")
                    console.log(e)
                    alert(e)

                })

        }

    }
    
    async function userDelete(uid){

        deleteUser(uid).then(res => {

            console.log(res)

        })
        .catch(e => console.log(e))

    }

    async function handleSignOut() {

        await AsyncStorage.clear()
        setUser()

    }

    return (

        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, signIn, loading, updateDatas, handleSignOut, videos, keys, mode, changeMode, videoToEdit, setVideoToEdit, changeURL, url, setUrl, changeURL, editVideo, newVideo, setNewVideo, pushVideo, deleteVideo, users, createUser, userDelete }}>

            {children}

        </AuthContext.Provider>

    )

}