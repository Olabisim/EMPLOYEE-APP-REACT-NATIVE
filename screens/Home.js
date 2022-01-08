import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Card } from "react-native-paper";


const Home = () => {

        return (
                <Card style =  {styles.mycard}>

                        <Image 
                        
                                style={{width: 50, height: 50, borderRadius: 50/2}}
                                source={{uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}}

                        />


                        <Text style={{fontSize: 18}}>
                                This is the home js components
                        </Text>
                </Card>
        )
}

const styles = StyleSheet.create({
        mycard : {
                margin: 5,
                padding: 5
        }

})

export default Home;