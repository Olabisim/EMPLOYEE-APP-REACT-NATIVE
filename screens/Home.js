import React from "react";
import { StyleSheet, Text, View, Image, FlatList} from "react-native";
import { Card, FAB } from "react-native-paper";


const Home = () => {

        const data = [ 
                {id: 1, name: "mukesh", position: "web dev"},
                {id: 2, name: "rukesh", position: "android dev"},
                {id: 3, name: "tukesh", position: "ML expert"},
                {id: 4, name: "sukesh", position: "web dev"},
                {id: 5, name: "sukesh", position: "web dev"},
                {id: 6, name: "sukesh", position: "web dev"},
                {id: 7, name: "sukesh", position: "web dev"},
                {id: 8, name: "sukesh", position: "web dev"},
                {id: 9, name: "sukesh", position: "web dev"},
                {id: 10, name: "sukesh", position: "web dev"},
                {id: 11, name: "sukesh", position: "web dev"},
                {id: 12, name: "sukesh", position: "web dev"},
        ]

        const renderList = ((item) => {

                return (
                        <Card style =  {styles.mycard}>

                                <View style = {styles.cardView}>
                                        <Image 
                                        
                                                style={{width: 50, height: 50, borderRadius: 50/2}}
                                                source={{uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}}

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
                <View>
                       
                        <FlatList 
                        
                                data = {data}
                                renderItem={({item}) => {
                                        return renderList(item)
                                }}
                                keyExtractor={item => item.id}
                        
                        />

                        <FAB
                                style={styles.fab}
                                small
                                icon="plus"
                                onPress={() => console.log('Pressed')}
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