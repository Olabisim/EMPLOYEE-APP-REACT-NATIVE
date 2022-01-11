import React, { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';



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
                
                </View>
        )
}

const theme = {
        colors: {
                primary: "blue"
        }
}

const styles = StyleSheet.create({
        root: {
                flex: 1
        },
        inputStyle: {
                margin: 5
        }
})



export default CreateEmployee;