import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, Alert, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {ngrok_link} from '../ngrok'
// import * as Permissions from 'expo-permissions';



const CreateEmployee = ( { navigation : {navigate}, route } ) => {

        const getDetails = (type) => {
                if(route.params) {
                        switch(type) {
                                case "name":
                                        return route.params.name
                                case "phone":
                                        return route.params.phone
                                case "email":
                                        return route.params.email
                                case "salary":
                                        return route.params.salary
                                case "picture":
                                        return route.params.picture
                                case "position":
                                        return route.params.position
                                
                        }
                }
                return ""
        }


        const [ name, setName ] = useState(getDetails("name"))
        const [phone,setPhone] = useState(getDetails("phone"))
        const [email,setEmail] = useState(getDetails("email"))
        const [salary,setSalary] = useState(getDetails("salary"))
        const [picture,setPicture] = useState(getDetails("picture"))
        const [position,setPosition] = useState(getDetails("position"))
        const [modal,setModal] = useState(false)
        const [enableshift,setenableShift] = useState(false)


        const submitData = ( ) => {

                fetch(ngrok_link + "send-data", {
                        method: "post",
                        headers: {
                                'Content-Type': 'application/json',
                              },
                              // also that they are objects that is name: name
                        body: JSON.stringify({
                                name,
                                email,
                                salary,
                                picture,
                                position,
                                phone
                        })
                })
                .then(res => res.json())
                .then(data => {
                        Alert.alert(`${data.name} is saved successfully`)
                        navigate("Home")
                        console.log('Success:', data);
                      })
                .catch(error => console.log(error))
                
        }
        

        const updateDetails = () => {

                fetch(ngrok_link + "update", {

                        method: "POST",
                        headers: {
                                'Content-Type': 'application/json',
                              },
                        body: JSON.stringify({
                                id: route.params._id,
                                name,
                                email,
                                salary,
                                picture,
                                position,
                                phone
                        })

                })
                .then(res => res.json())

                .then(data => {
                        Alert.alert(`${data.name} is updated successfully`)
                        navigate("Home")
                        console.log('Success:', data);
                      })
                .catch(err => Alert.alert(err))
        }


        const pickFromGallery = async () => {

                // const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

                // if(granted) {
                        let data = await ImagePicker.launchImageLibraryAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                allowsEditing: true,
                                aspect: [1,1],
                                quality: 0.5
                        })
                        if(!data.cancelled) {
                                let newfile = {

                                        uri: data.uri,
                                        type: `test/${data.uri.split(".")[1]}`,
                                        name: `test.${data.uri.split(".")[1]}`
                                }
                                handleUpload(newfile)
                        }
                // }
                // else {
                //         Alert.alert("you need to give us permission to work")
                // }
        }


        const pickFromCamera = async () => {

                const {status} = await ImagePicker.requestCameraPermissionsAsync()

                if(status == "granted") {
                        let data = await ImagePicker.launchCameraAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                allowsEditing: true,
                                aspect: [1,1],
                                quality: 0.5
                        })
                        if(!data.cancelled) {
                                let newfile = {

                                        uri: data.uri,
                                        type: `test/${data.uri.split(".")[1]}`,
                                        name: `test.${data.uri.split(".")[1]}`
                                }
                                handleUpload(newfile)
                        }
                }
                else {
                        Alert.alert("you need to give us permission to work")
                }
        }


        const handleUpload = (image) => {
                const data = new FormData()
                data.append('file', image)
                data.append('upload_preset', 'employeeApp')
                data.append("cloud_name", "olabisiminasu")

                fetch("https://api.cloudinary.com/v1_1/olabisiminasu/image/upload", {

                        method: "post",
                        body: data

                })
                .then(res => res.json())
                .then(data => {
                        console.log(data);
                        setPicture(data.url)
                        setModal(false)
                })
                .catch(err => {
                        Alert.alert("error while uploading")
                })
        }


        return (
                <View style={styles.root}>


                        <TextInput 
                                label = "Name"
                                style={styles.inputStyle}
                                value = {name}
                                theme = {theme}
                                mode = "outlined"
                                onChangeText={ text => setName(text)}
                        />

                        <TextInput 
                                label = "Email"
                                style={styles.inputStyle}
                                value = {email}
                                theme = {theme}
                                mode = "outlined"
                                onChangeText={ text => setEmail(text)}
                        />
                        <TextInput 
                                label = "Phone"
                                style={styles.inputStyle}
                                value = {phone}
                                theme = {theme}
                                keyboardType='number-pad'
                                mode = "outlined"
                                onChangeText={ text => setPhone(text)}
                        />

                        
                        <KeyboardAvoidingView behavior="position">

                        <TextInput 
                                label = "Salary"
                                style={styles.inputStyle}
                                value = {salary}
                                theme = {theme}
                                keyboardType='number-pad'
                                mode = "outlined"
                                onChangeText={ text => setSalary(text)}
                        />
                        <TextInput 
                                label = "Position"
                                style={styles.inputStyle}
                                value = {position}
                                theme = {theme}
                                keyboardType='number-pad'
                                mode = "outlined"
                                onChangeText={ text => setPosition(text)}
                        />

                        <Button   
                                style={styles.inputStyle}    
                                // picture will automatically be false if it empty   
                                icon={picture == "" ? "upload" : "check"}
                                mode="contained" 
                                theme={theme}
                                onPress={() => setModal(true)}
                        >
                                Upload Image
                        </Button>

                        {
                                route.params

                                ?

                                <Button   
                                style={styles.inputStyle}       
                                icon="content-save" 
                                mode="contained" 
                                theme={theme}
                                onPress={() => updateDetails()}
                                >
                                        Update details 
                                </Button>

                                :

                                <Button   
                                style={styles.inputStyle}       
                                icon="content-save" 
                                mode="contained" 
                                theme={theme}
                                onPress={() => submitData()}
                                >
                                        Save
                                </Button>
                        }

                        
                
                        <Modal
                                animationType='slide'
                                transparent= {true}
                                visible={modal}
                                // this is when you press the back button on your phonw that is onRequest
                                onRequestClose={() => setModal(false)}
                        >
                                <View style={styles.modalView}>
                                        <View style={styles.modalButtonView}>
                                                {/* <Button theme={theme} icon="camera" mode="contained" onPress={() => setModal(false)}> */}
                                                
                                                <Button theme={theme} icon="camera" mode="contained" onPress={() => pickFromCamera()}>
                                                        camera
                                                </Button>
                                                <Button theme={theme} icon="image-area" mode="contained" onPress={() => pickFromGallery()}>
                                                        gallery
                                                </Button>
                                                
                                        </View>

                                        <Button onPress={() => setModal(false)} style={{color: "white"}}>
                                                cancel
                                        </Button>
                                </View>
                        
                        </Modal>
                        
                        </KeyboardAvoidingView>

                </View>
        )
}

const theme = {
        colors: {
                primary: "white"
        }
}

const styles = StyleSheet.create({
        root: {
                flex: 1
        },
        inputStyle: {
                margin: 5
        },
        modalView: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: "blue",
                // margin: 10

        },
        modalButtonView: {
                flexDirection: 'row',
                justifyContent: "center",
                padding: 15,
                // margin: 10
        }
})



export default CreateEmployee;