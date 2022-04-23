import React, { useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Alert} from "react-native";
import { Card, FAB } from "react-native-paper";
import {ngrok_link} from '../ngrok'
import { useSelector, useDispatch } from "react-redux";


const Home = ({navigation}) => {

//        const [data, setData] = useState([])
//        const [loading, setLoading] = useState(true)

        const dispatch = useDispatch()

        const { data, loading } = useSelector((state) => {
                return state
        })


       const fetchData = () => {

                fetch(ngrok_link)

                        .then(res => res.json())
        
                        .then(results => {
                                
                                // console.log(results) source
                                // setData(results)
                                // setLoading(false)
                                dispatch({ type: "ADD_DATA", payload: results})
                                dispatch({ type: "SET_LOADING", payload: false})

        
                        })
                        .catch(error => Alert.alert("something went wrong"))
       }

       useEffect(() => {

                fetchData()

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
                {/*        
                       {
                               loading
                               ?
                               <ActivityIndicator size="large" color="#00ff00" />
                               :source
                */} 
                                <FlatList 
                                
                                        data = {data}
                                        renderItem={({item}) => {       
                                                return renderList(item)
                                        }}
                                        keyExtractor={item => item._id}
                                        onRefresh={() => fetchData()}
                                        refreshing= {loading}
                        
                                />
                       {/*   } */}
                       
                       <FAB
                                style={styles.fab}
                                small
                                icon="plus"
                                onPress={() => navigation.navigate("Create")}
                                theme={{colors: {accent: "#00f"}}}
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