import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, Alert } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';



const CreateEmployee = () => {

        
        const [ name, setName ] = useState("name")
        const [phone,setPhone] = useState("phone")
        const [email,setEmail] = useState("email")
        const [salary,setSalary] = useState("salary")
        const [picture,setPicture] = useState("picture")
        const [position,setPosition] = useState("position")
        const [modal,setModal] = useState(false)
        const [enableshift,setenableShift] = useState(false)


        const submitData = () => {

                fetch("http://8074-129-205-124-100.eu.ngrok.io/send-data", {
                        method: "post",
                        headers: {
                                'Content-Type': 'application/json',
                              },
                        body: JSON.stringify({
                                // also that they are objects that is name: name
                                name,
                                email,
                                salary,
                                picture,
                                position,
                                phone
                        })
                })
                .then(response => {
                        response.json()
                })
                .then(data => console.log("success ", data))
                .catch(error => console.log(error))
                
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
        }


        return (
                <View style={StyleSheet.root}>

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

                        <Button   
                                style={styles.inputStyle}       
                                icon="content-save" 
                                mode="contained" 
                                theme={theme}
                                onPress={() => submitData()}
                        >
                                Save
                        </Button>
                
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