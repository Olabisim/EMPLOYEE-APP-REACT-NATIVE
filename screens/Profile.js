import React from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Profile = () => {
        return (
                <View style={styles.root}>

                        <LinearGradient 

                                colors={["blue", "green"]}
                                style={{height: '20%'}}

                        />

                                <View style={{alignItems: "center"}}>
                                
                                        <Image 
                                        
                                                style={{width:140, height: 140, borderRadius: 140/2, marginTop: -50}}
                                                source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}}
                                        
                                        />
                                
                                </View>


                </View>
        )
}

const styles = StyleSheet.create({

        root: {
                flex: 1
        }
})


export default Profile;