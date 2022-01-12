import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Contants from "expo-constants"
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator();

function App() {
	return (
		<View style={styles.container}>

			<Stack.Navigator>

				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Create" component={CreateEmployee} />
				<Stack.Screen name="Profile" component={Profile} />
 
			</Stack.Navigator>
		
		</View>
	);
}

export default () => {

	return (
		<NavigationContainer>
		
			<App />

		</NavigationContainer>
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
