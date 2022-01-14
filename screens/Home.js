import React, { useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from "react-native";
import { Card, FAB } from "react-native-paper";


const Home = ({navigation}) => {

       const [data, setData] = useState([])
       const [loading, setLoading] = useState(true)

       useEffect(() => {

                fetch("http://a0d4-129-205-124-100.eu.ngrok.io/")

                .then(res => res.json())

                .then(results => {
                        
                        console.log(results)
                        setData(results)
                        setLoading(false)

                })
                .catch(error => console.log(error))

       }, [])

        const renderList = ((item) => {

                return (
                        // we can equally pass data during navigation
                        <Card 
                                style =  {styles.mycard} 
                                // the key is item both the key and the navigation is the same
                                onPress={() => navigation.navigate("Profile", {item})}

                        >

                                <View style = {styles.cardView}>
                                        <Image 
                                        
                                                style={{width: 50, height: 50, borderRadius: 50/2}}
                                                source={{uri: item.picture}}

                                        />

                                        <View style={ styles.textView } >
                                        
                                                <Text>
                                                        {item.name}
                                                </Text>
                                                <Text >
                                                        {item.position}
                                                </Text>

                                        </View>
                                
                                </View>
                        
                        </Card>
                )
        })

        return (
                <View style={{flex: 1}}>
                        
                       {
                               loading
                               ?
                               <ActivityIndicator size="large" color="#00ff00" />
                               :
                               
                                <FlatList 
                                
                                        data = {data}
                                        renderItem={({item}) => {       
                                                return renderList(item)
                                        }}
                                        keyExtractor={item => item._id}
                        
                                />
                       }
                       
                       <FAB
                                style={styles.fab}
                                small
                                icon="plus"
                                onPress={() => navigation.navigate("Create")}
                                theme={{colors: {accent: "#000"}}}
                        />

                </View>
        )
}

const styles = StyleSheet.create({
        mycard : {
                margin: 5,
                padding: 5
        },
        cardView : {
                flexDirection: "row"
        },
        textView: {
                fontSize: 16,
                margin: 3
        },
        fab: {
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 0,
        },

})

export default Home;