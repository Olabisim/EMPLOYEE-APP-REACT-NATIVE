import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Contants from "expo-constants"
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';
import Welcome from './screens/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from "redux"
import {Provider} from 'react-redux'
import { reducer } from './reducers/reducer'


const store = createStore(reducer)


const Stack = createStackNavigator();

const myOptions = {
	title: "Employers",
	headerTintColor: "white",
	headerStyle: {
		backgroundColor: "blue"
	}
}

function App() {
	return (
		<View style={styles.container}>

			<Stack.Navigator>

				<Stack.Screen name="Welcome" component={Welcome} options={{...myOptions, title: "Welcome"}} />
				<Stack.Screen name="Home" component={Home} options={myOptions} />
				<Stack.Screen name="Create" component={CreateEmployee} options={{...myOptions, title: "Create Employee"}} />
				<Stack.Screen name="Profile" component={Profile} options={{...myOptions, title: "Profile"}}/>
 
			</Stack.Navigator>
		
		</View>
	);
}

export default () => {

	return (
		<Provider store={store}>

			<NavigationContainer>
			
				<App />

			</NavigationContainer>
		
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
		marginTop: Contants.statusBarHeight
	},
});
