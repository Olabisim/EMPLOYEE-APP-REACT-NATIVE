import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal } from "react-native";
import { TextInput, Button } from 'react-native-paper';



const CreateEmployee = () => {

        
        const [ name, setName ] = useState("name")
        const [phone,setPhone] = useState("phone")
        const [email,setEmail] = useState("email")
        const [salary,setSalary] = useState("salary")
        const [picture,setPicture] = useState("picture")
        const [position,setPosition] = useState("position")
        const [modal,setModal] = useState(false)
        const [enableshift,setenableShift] = useState(false)


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

                        <Button   
                                style={styles.inputStyle}       
                                icon="camera" 
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
                                onPress={() => console.log("saved")}
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
                                                
                                                <Button theme={theme} icon="camera" mode="contained" onPress={() => console.log("pressed")}>
                                                        camera
                                                </Button>
                                                <Button theme={theme} icon="image-area" mode="contained" onPress={() => console.log("pressed")}>
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