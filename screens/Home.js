import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";


const Home = () => {

        return (
                <Card style =  {styles.mycard}>
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