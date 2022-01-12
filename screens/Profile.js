import React from "react";
import {View, Text, StyleSheet, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from '@expo/vector-icons';


// 
// There's an error with the profile page so the opendial connecting with the tel: stuff
// 

const Profile = () => {

        const openDial = () => {

                if(Platform.OS === "android") {
                        Linking.openURL("tel:12345")
                }
                else {
                        Linking.openURL("telprompt:12345")
                }

        }


        return (
                <View style={styles.root}>

                        <LinearGradient 

                                colors={["blue", "navy"]}
                                style={{height: '20%'}}

                        />

                        <View style={{alignItems: "center"}}>
                        
                                <Image 
                                
                                        style={{width:140, height: 140, borderRadius: 140/2, marginTop: -50}}
                                        source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}}
                                
                                />
                        
                        </View>

                        <View style={{alignItems: "center", margin: 15}}>
                        
                                <Title>Ajoseh Olabisi</Title>
                                <Text style={{fontSize: 15}}>web developer</Text>
                        
                        </View>

                        <Card style={styles.mycard} onPress={() => Linking.openURL("mailto:abc@abc.com")}>
                        
                                <View style={styles.cardContent}>
                                
                                        <MaterialIcons name="email" size={32} color="blue" />
                                        <Text style={styles.mytext}>abc@abc.com</Text>

                                </View>
                        
                        </Card>

                        <Card style={styles.mycard}>
                        
                                <View style={styles.cardContent} onPress={openDial}>
                                
                                        <Entypo name="phone" size={32} color="blue" />
                                        <Text style={styles.mytext}>123456</Text>

                                </View>
                        
                        </Card>
                        
                        <Card style={styles.mycard}>
                        
                                <View style={styles.cardContent}>
                                
                                        <MaterialIcons name="attach-money" size={32} color="blue" />
                                        <Text style={styles.mytext}>8 LPA</Text>

                                </View>
                
                        </Card>

                        <View style={{flexDirection:"row", justifyContent:"space-around", padding: 10}}>
                        
                                <Button icon="account-edit" mode="contained" theme={theme} onPress={() => console.log('Pressed')}>
                                        Edit
                                </Button>

                                <Button icon="delete" mode="contained" theme={theme} onPress={() => console.log('Pressed')}>
                                        Fire employee
                                </Button>

                        </View>


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
        mycard: {
                margin: 3
        },
        cardContent: {
                flexDirection: "row",
                padding: 8
        },
        mytext: {
                fontSize: 16,
                marginTop: 3,
                marginLeft: 5
        }
})


export default Profile;