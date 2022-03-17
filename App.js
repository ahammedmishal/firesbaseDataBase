import React,{useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import List from './screens/List';
import Additems from './screens/Additems';
import Login from './screens/Login';
import auth from '@react-native-firebase/auth'
import MobileLogin from './screens/MobileLogin';

const Stack = createNativeStackNavigator();

const Loading = ({navigation}) =>{
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
          navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    });
  }, [])
  
  return(
    <View style={styles.container}>
       <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}

const App = () => {
  return (
<NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="MobileLogin" component={MobileLogin} options={{headerBackVisible: false}}/>
        {/* <Stack.Screen name="Login" component={Login} options={{headerBackVisible: false}}/> */}
        <Stack.Screen name="Loading" component={Loading} options={{headerShown:false,headerLeft:null,gestureEnabled:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerBackVisible: false}} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Additems" component={Additems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  }
});

export default App;