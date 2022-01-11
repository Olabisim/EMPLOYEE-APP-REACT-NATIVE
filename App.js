import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Contants from "expo-constants"
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';


export default function App() {
	return (
		<View style={styles.container}>
		
			{/* 
				<Home />
			*/}
			{/* 
				<CreateEmployee />
			*/}
			<Profile />
			<StatusBar style="auto" />

		</View>
	);
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
