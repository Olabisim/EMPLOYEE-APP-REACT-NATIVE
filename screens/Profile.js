import React from "react";
import {View, Text, StyleSheet, Image, Linking, Platform, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {ngrok_link} from '../ngrok'


// 
// There's an error with the profile page so the opendial connecting with the tel: stuff
// 




const Profile = (props) => {

        // try to change this to inner destructuring 
        const { _id, name, picture, phone, salary, email, position} = props.route.params.item;


        const fireEmployee = () => {

                fetch(ngrok_link + 'delete', {
        
                        method: "POST",
                        headers: {
                                'Content-Type': 'application/json',
                              },
                        // the backend is the id while the _id is the present one
                        body: JSON.stringify({id: _id}),
                            
                })      
                .then (res => res.json())
                .then(deleteEmp => {
                        Alert.alert(`${deleteEmp.name} deleted`)
                        props.navigation.navigate("Home")
                })
                .catch(error => Alert.alert(error))
        
        }
        

        const openDial = () => {

                if(Platform.OS === "android") {
                        Linking.openURL(`tel:${phone}`)
                }
                else {
                        Linking.openURL(`telprompt:${phone}`)
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
                                        source={{uri: picture}}
                                
                                />
                        
                        </View>

                        <View style={{alignItems: "center", margin: 15}}>
                        
                                <Title>{name}</Title>
                                <Text style={{fontSize: 15}}>{position}</Text>
                        
                        </View>

                        <Card style={styles.mycard} onPress={() => Linking.openURL(`mailto:${email}`)}>
                        
                                <View style={styles.cardContent}>
                                
                                        <MaterialIcons name="email" size={32} color="blue" />
                                        <Text style={styles.mytext}>{email}</Text>

                                </View>
                        
                        </Card>

                        <Card style={styles.mycard}>
                        
                                <View style={styles.cardContent} onPress={openDial}>
                                
                                        <Entypo name="phone" size={32} color="blue" />
                                        <Text style={styles.mytext}>{phone}</Text>

                                </View>
                        
                        </Card>
                        
                        <Card style={styles.mycard}>
                        
                                <View style={styles.cardContent}>
                                
                                        <MaterialIcons name="attach-money" size={32} color="blue" />
                                        <Text style={styles.mytext}>{salary}</Text>

                                </View>
                
                        </Card>

                        <View style={{flexDirection:"row", justifyContent:"space-around", padding: 10}}>
                        
                                <Button icon="account-edit" mode="contained" theme={theme} 
                                        onPress={() => {
                                                props.navigation.navigate("Create",
                                                { _id, name, picture, phone, salary, email, position }
                                                )}
                                        }
                                >
                                        Edit
                                </Button>

                                <Button icon="delete" mode="contained" theme={theme} onPress={() => fireEmployee()}>
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